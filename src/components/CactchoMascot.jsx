import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas';
import { formatCurrency } from '../utils/currency';
import {
  clearCactchoSession,
  loadCactchoSession,
  saveCactchoSession,
} from '../utils/storage';

const RIVE_FILE = '/rive/cactcho.riv';
const ARTBOARD = 'Cactcho';
const STATE_MACHINE = 'CactchoController';

const RESTORABLE_STEPS = new Set([
  'summary',
  'name',
  'payment',
  'change',
  'note',
  'review',
  'success',
  'sentConfirm',
]);

const TALKING_STEPS = new Set([
  'greeting',
  'help',
  'added',
  'empty',
  'summary',
  'closed',
  'success',
  'sentConfirm',
  'done',
]);

const THINKING_STEPS = new Set([
  'name',
  'payment',
  'change',
  'note',
  'review',
]);

const PROGRESS_STEPS = ['Pedido', 'Dados', 'Pagamento', 'Revisão'];

function getBahiaGreeting() {
  const hour = Number(
    new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Bahia',
      hour: '2-digit',
      hourCycle: 'h23',
    }).format(new Date()),
  );

  if (hour >= 5 && hour < 12) return 'Bom dia!';
  if (hour >= 12 && hour < 18) return 'Boa tarde!';
  return 'Boa noite!';
}

function getProgressIndex(step) {
  if (step === 'summary') return 0;
  if (step === 'name') return 1;
  if (['payment', 'change', 'note'].includes(step)) return 2;
  if (['review', 'success', 'sentConfirm'].includes(step)) return 3;
  return -1;
}

function itemUnitTotal(item) {
  return item.unitPrice + item.additions.reduce((sum, addition) => sum + addition.price, 0);
}

function sanitizeChangeValue(value) {
  return value.replace(',', '.').replace(/[^\d.]/g, '');
}

function emptyCustomer() {
  return {
    name: '',
    payment: 'Pix',
    changeFor: '',
    note: '',
  };
}

export default function CactchoMascot({
  event,
  cart = [],
  customer,
  status,
  onSaveCustomer,
  onSendOrder,
  onChangeQuantity,
  onRemoveItem,
  onEditItem,
  onClearOrder,
}) {
  const initialSession = useMemo(() => loadCactchoSession(), []);
  const initialRestorableStep = (
    cart.length
    && RESTORABLE_STEPS.has(initialSession?.step)
  ) ? initialSession.step : null;

  const [loadFailed, setLoadFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 420);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [bubbleStep, setBubbleStep] = useState(initialRestorableStep || 'greeting');
  const [greeting, setGreeting] = useState(() => getBahiaGreeting());
  const [addedProductName, setAddedProductName] = useState('');
  const [formError, setFormError] = useState('');
  const [summaryMessage, setSummaryMessage] = useState('');

  const [guidedCustomer, setGuidedCustomer] = useState(() => ({
    ...emptyCustomer(),
    ...(customer || {}),
    ...(initialSession?.customer || {}),
  }));

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + itemUnitTotal(item) * item.quantity, 0),
    [cart],
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const progressIndex = getProgressIndex(bubbleStep);
  const compact = scrolled && !bubbleOpen;

  const greetedRef = useRef(false);
  const autoCloseRef = useRef(null);
  const bubbleRef = useRef(null);
  const resumeStepRef = useRef(initialRestorableStep);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setReducedMotion(media.matches);

    syncPreference();
    media.addEventListener?.('change', syncPreference);

    return () => media.removeEventListener?.('change', syncPreference);
  }, []);

  useEffect(() => {
    let frame = null;

    const handleScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 420);
        frame = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!customer) return;

    setGuidedCustomer((current) => ({
      ...current,
      name: customer.name || current.name || '',
      payment: customer.payment || current.payment || 'Pix',
      changeFor: customer.changeFor ?? current.changeFor ?? '',
      note: customer.note ?? current.note ?? '',
    }));
  }, [customer]);

  useEffect(() => {
    if (!cart.length) {
      resumeStepRef.current = null;
      clearCactchoSession();
      return;
    }

    if (!RESTORABLE_STEPS.has(bubbleStep)) return;

    resumeStepRef.current = bubbleStep;
    saveCactchoSession({
      step: bubbleStep,
      customer: guidedCustomer,
      updatedAt: Date.now(),
    });
  }, [bubbleStep, guidedCustomer, cart.length]);

  const { rive, RiveComponent } = useRive({
    src: RIVE_FILE,
    artboard: ARTBOARD,
    stateMachines: STATE_MACHINE,
    autoplay: !reducedMotion,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.BottomCenter,
    }),
    onLoadError: () => setLoadFailed(true),
  });

  const waveTrigger = useStateMachineInput(rive, STATE_MACHINE, 'trigger_wave');
  const happyTrigger = useStateMachineInput(rive, STATE_MACHINE, 'trigger_happy');
  const pointTrigger = useStateMachineInput(rive, STATE_MACHINE, 'trigger_point');
  const successTrigger = useStateMachineInput(rive, STATE_MACHINE, 'trigger_success');
  const talkInput = useStateMachineInput(rive, STATE_MACHINE, 'is_talking');
  const thinkingInput = useStateMachineInput(rive, STATE_MACHINE, 'is_thinking');
  const closedInput = useStateMachineInput(rive, STATE_MACHINE, 'is_closed');
  const cartCountInput = useStateMachineInput(rive, STATE_MACHINE, 'cart_count');

  useEffect(() => {
    if (!rive) return;

    if (reducedMotion) {
      rive.pause();
    } else {
      rive.play(STATE_MACHINE);
    }
  }, [rive, reducedMotion]);

  useEffect(() => {
    if (cartCountInput) cartCountInput.value = cartCount;
  }, [cartCountInput, cartCount]);

  useEffect(() => {
    if (closedInput) closedInput.value = !status?.open;
  }, [closedInput, status?.open]);

  useEffect(() => {
    const thinking = bubbleOpen && THINKING_STEPS.has(bubbleStep);

    // A animação de boca (`is_talking`) foi desativada por decisão visual.
    // O balão continua sendo a fala do Cactchô.
    if (talkInput) talkInput.value = false;
    if (thinkingInput) thinkingInput.value = thinking;

    return () => {
      if (talkInput) talkInput.value = false;
      if (thinkingInput) thinkingInput.value = false;
    };
  }, [bubbleOpen, bubbleStep, talkInput, thinkingInput]);

  useEffect(() => {
    if (!waveTrigger || reducedMotion || greetedRef.current || !status?.open) return;

    const timer = window.setTimeout(() => {
      waveTrigger.fire();
      greetedRef.current = true;
    }, 700);

    return () => window.clearTimeout(timer);
  }, [waveTrigger, reducedMotion, status?.open]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setGreeting(getBahiaGreeting());

      if (initialRestorableStep && cart.length) {
        setBubbleStep(initialRestorableStep);
      } else if (!status?.open) {
        setBubbleStep('closed');
      } else {
        setBubbleStep('greeting');
      }

      setBubbleOpen(true);
    }, reducedMotion ? 350 : 1250);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!bubbleOpen || bubbleStep !== 'greeting') return undefined;

    window.clearTimeout(autoCloseRef.current);
    autoCloseRef.current = window.setTimeout(() => {
      setBubbleOpen(false);
    }, 9000);

    return () => window.clearTimeout(autoCloseRef.current);
  }, [bubbleOpen, bubbleStep]);

  useEffect(() => {
    if (!event) return;

    window.clearTimeout(autoCloseRef.current);
    setFormError('');

    if (event.type === 'item-added') {
      setAddedProductName(event.productName || 'Seu item');
      setSummaryMessage('');
      setBubbleStep('added');
      setBubbleOpen(true);

      if (!reducedMotion && happyTrigger && status?.open) {
        happyTrigger.fire();
      }
      return;
    }

    if (event.type === 'item-updated') {
      setSummaryMessage(`${event.productName || 'Item'} atualizado.`);
      setBubbleStep(cart.length ? 'summary' : 'empty');
      setBubbleOpen(true);
      return;
    }

    if (event.type === 'open-order') {
      setSummaryMessage('');
      setBubbleStep(cart.length ? 'summary' : 'empty');
      setBubbleOpen(true);

      if (cart.length && !reducedMotion && pointTrigger && status?.open) {
        pointTrigger.fire();
      }
    }
  }, [
    event,
    cart.length,
    happyTrigger,
    pointTrigger,
    reducedMotion,
    status?.open,
  ]);

  useEffect(() => {
    if (!bubbleOpen || bubbleStep !== 'summary' || cart.length) return;

    setSummaryMessage('');
    setBubbleStep('empty');
  }, [cart.length, bubbleOpen, bubbleStep]);

  useEffect(() => {
    if (!bubbleOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        window.clearTimeout(autoCloseRef.current);
        setBubbleOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [bubbleOpen]);

  useEffect(() => {
    if (!bubbleOpen) return;
    if (['name', 'change', 'note'].includes(bubbleStep)) return;

    const frame = window.requestAnimationFrame(() => {
      bubbleRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [bubbleOpen, bubbleStep]);

  useEffect(() => {
    if (!bubbleOpen || bubbleStep !== 'done') return undefined;

    const timer = window.setTimeout(() => {
      setBubbleOpen(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [bubbleOpen, bubbleStep]);

  const chooseOpenStep = () => {
    if (cart.length && resumeStepRef.current) {
      return resumeStepRef.current;
    }

    if (!status?.open && !cart.length) return 'closed';
    return cart.length ? 'summary' : 'greeting';
  };

  const openBubble = () => {
    window.clearTimeout(autoCloseRef.current);
    setGreeting(getBahiaGreeting());
    setFormError('');
    setSummaryMessage('');

    const nextStep = chooseOpenStep();
    setBubbleStep(nextStep);
    setBubbleOpen(true);

    if (nextStep === 'summary' && !reducedMotion && pointTrigger && status?.open) {
      pointTrigger.fire();
    }
  };

  const closeBubble = () => {
    window.clearTimeout(autoCloseRef.current);
    setFormError('');
    setBubbleOpen(false);
  };

  const handleHelp = () => {
    window.clearTimeout(autoCloseRef.current);
    setBubbleStep('help');
  };

  const handleContinue = () => {
    window.clearTimeout(autoCloseRef.current);
    setBubbleOpen(false);
  };

  const handleFinalize = () => {
    window.clearTimeout(autoCloseRef.current);

    if (!cart.length) {
      setBubbleStep('empty');
      setBubbleOpen(true);
      return;
    }

    setFormError('');
    setSummaryMessage('');
    setBubbleStep('summary');
    setBubbleOpen(true);

    if (!reducedMotion && pointTrigger && status?.open) {
      pointTrigger.fire();
    }
  };

  const handleConfirmSummary = () => {
    if (!cart.length) {
      setBubbleStep('empty');
      return;
    }

    setFormError('');
    setSummaryMessage('');
    setBubbleStep('name');
  };

  const handleItemQuantity = (cartId, delta) => {
    onChangeQuantity?.(cartId, delta);
    setSummaryMessage('Quantidade atualizada.');
  };

  const handleItemRemove = (cartId) => {
    onRemoveItem?.(cartId);
    setSummaryMessage('Item removido do pedido.');
  };

  const handleItemEdit = (item) => {
    setBubbleOpen(false);
    setSummaryMessage('');
    onEditItem?.(item);
  };

  const updateGuidedCustomer = (field, value) => {
    setGuidedCustomer((current) => ({
      ...current,
      [field]: value,
    }));
    setFormError('');
  };

  const handleNameNext = () => {
    if (!guidedCustomer.name.trim()) {
      setFormError('Digite seu nome para continuar.');
      return;
    }

    setBubbleStep('payment');
  };

  const handlePaymentSelect = (payment) => {
    setGuidedCustomer((current) => ({
      ...current,
      payment,
      changeFor: payment === 'Dinheiro' ? current.changeFor : '',
    }));
    setFormError('');

    if (payment === 'Dinheiro') {
      setBubbleStep('change');
    } else {
      setBubbleStep('note');
    }
  };

  const handleNoChange = () => {
    updateGuidedCustomer('changeFor', '');
    setBubbleStep('note');
  };

  const handleChangeNext = () => {
    if (guidedCustomer.changeFor && Number(guidedCustomer.changeFor) <= 0) {
      setFormError('Informe um valor válido para o troco.');
      return;
    }

    setBubbleStep('note');
  };

  const handleReview = () => {
    const normalized = {
      ...guidedCustomer,
      name: guidedCustomer.name.trim(),
      note: guidedCustomer.note.trim(),
      changeFor: guidedCustomer.payment === 'Dinheiro'
        ? guidedCustomer.changeFor
        : '',
    };

    setGuidedCustomer(normalized);
    onSaveCustomer?.(normalized);
    setFormError('');
    setBubbleStep('review');
  };

  const handleConfirmData = () => {
    onSaveCustomer?.(guidedCustomer);
    setFormError('');
    setBubbleStep('success');

    if (!reducedMotion && successTrigger && status?.open) {
      successTrigger.fire();
    }
  };

  const handleWhatsApp = () => {
    if (!status?.open) {
      setFormError('A loja está fechada agora. Seu pedido continua salvo para quando abrir.');
      return;
    }

    const result = onSendOrder?.(guidedCustomer);

    if (result && !result.ok) {
      setFormError(result.message);
      return;
    }

    setFormError('');
    setBubbleStep('sentConfirm');
  };

  const handleSentYes = () => {
    clearCactchoSession();
    resumeStepRef.current = null;
    setGuidedCustomer(emptyCustomer());
    onClearOrder?.();
    setFormError('');
    setSummaryMessage('');
    setBubbleStep('done');

    if (!reducedMotion && successTrigger) {
      successTrigger.fire();
    }
  };

  const handleSentNo = () => {
    setFormError('');
    setBubbleStep('success');
  };

  const handleClosedOrder = () => {
    setBubbleStep(cart.length ? 'summary' : 'empty');
  };

  if (loadFailed) return null;

  return (
    <>
      {bubbleOpen && (
        <section
          ref={bubbleRef}
          id="cactcho-dialog"
          className={`cactcho-bubble cactcho-bubble--${bubbleStep}`}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cactcho-dialog-title"
          tabIndex="-1"
        >
          <button
            className="cactcho-bubble-close"
            type="button"
            onClick={closeBubble}
            aria-label="Fechar atendimento do Cactchô"
          >
            ×
          </button>

          {progressIndex >= 0 && (
            <div className="cactcho-progress" aria-label="Progresso do atendimento">
              {PROGRESS_STEPS.map((label, index) => (
                <span
                  key={label}
                  className={[
                    index < progressIndex ? 'is-done' : '',
                    index === progressIndex ? 'is-active' : '',
                  ].filter(Boolean).join(' ')}
                  aria-current={index === progressIndex ? 'step' : undefined}
                >
                  <b>{index + 1}</b>
                  {label}
                </span>
              ))}
            </div>
          )}

          {bubbleStep === 'greeting' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                {greeting}
              </strong>
              <p>Eu sou o Cactchô. Posso te ajudar com seu pedido?</p>

              <div className="cactcho-bubble-actions">
                <button type="button" onClick={handleHelp}>Quero ajuda</button>
                <button className="is-secondary" type="button" onClick={closeBubble}>
                  Vou escolher
                </button>
              </div>
            </>
          )}

          {bubbleStep === 'closed' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                A loja está fechada agora.
              </strong>
              <p>
                Mas pode montar seu pedido normalmente. Ele fica salvo e a loja abre às 8h.
              </p>

              <div className="cactcho-bubble-actions">
                {cart.length > 0 && (
                  <button type="button" onClick={handleClosedOrder}>Ver meu pedido</button>
                )}
                <button className="is-secondary" type="button" onClick={closeBubble}>
                  Continuar escolhendo
                </button>
              </div>
            </>
          )}

          {bubbleStep === 'help' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Pode deixar!
              </strong>
              <p>Escolha seus favoritos. Quando você adicionar um item, eu continuo daqui.</p>

              <div className="cactcho-bubble-actions">
                <button type="button" onClick={closeBubble}>Entendi</button>
              </div>
            </>
          )}

          {bubbleStep === 'added' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Boa escolha!
              </strong>
              <p><strong>{addedProductName}</strong> já está no seu pedido.</p>

              {!status?.open && (
                <p className="cactcho-closed-message">
                  A loja está fechada, mas seu pedido continua salvo.
                </p>
              )}

              <div className="cactcho-bubble-actions cactcho-bubble-actions--checkout">
                <button className="is-secondary" type="button" onClick={handleContinue}>
                  Continuar escolhendo
                </button>
                <button type="button" onClick={handleFinalize}>Finalizar</button>
              </div>
            </>
          )}

          {bubbleStep === 'empty' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Seu pedido está vazio.
              </strong>
              <p>Escolha algo no cardápio e eu cuido do restante com você.</p>

              <div className="cactcho-bubble-actions">
                <button type="button" onClick={closeBubble}>Vou escolher</button>
              </div>
            </>
          )}

          {bubbleStep === 'summary' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Seu pedido
              </strong>
              <p>Você pode ajustar tudo por aqui antes de finalizar.</p>

              {!status?.open && (
                <p className="cactcho-closed-message">
                  Pode deixar tudo pronto. O envio ficará disponível quando a loja abrir.
                </p>
              )}

              {summaryMessage && (
                <p className="cactcho-inline-status" role="status">{summaryMessage}</p>
              )}

              <div className="cactcho-order-summary cactcho-order-summary--editable" aria-label="Itens do pedido">
                {cart.map((item) => (
                  <article className="cactcho-summary-item cactcho-summary-item--editable" key={item.cartId}>
                    <div className="cactcho-summary-main">
                      <div className="cactcho-summary-title-row">
                        <strong>{item.name}</strong>
                        <span>{formatCurrency(itemUnitTotal(item) * item.quantity)}</span>
                      </div>

                      {item.removedIngredients.length > 0 && (
                        <small>Sem: {item.removedIngredients.join(', ')}</small>
                      )}

                      {item.additions.length > 0 && (
                        <small>+ {item.additions.map((addition) => addition.name).join(', ')}</small>
                      )}

                      {item.note && <small>Obs.: {item.note}</small>}

                      <div className="cactcho-item-controls">
                        <div className="cactcho-quantity-control" aria-label={`Quantidade de ${item.name}`}>
                          <button
                            type="button"
                            onClick={() => handleItemQuantity(item.cartId, -1)}
                            aria-label={`Diminuir quantidade de ${item.name}`}
                          >
                            −
                          </button>
                          <span aria-live="polite">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => handleItemQuantity(item.cartId, 1)}
                            aria-label={`Aumentar quantidade de ${item.name}`}
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="cactcho-item-action"
                          type="button"
                          onClick={() => handleItemEdit(item)}
                        >
                          Editar
                        </button>

                        <button
                          className="cactcho-item-action is-remove"
                          type="button"
                          onClick={() => handleItemRemove(item.cartId)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="cactcho-summary-total">
                <span>Total</span>
                <strong>{formatCurrency(cartTotal)}</strong>
              </div>

              <p className="cactcho-summary-question">Tudo certo?</p>

              <div className="cactcho-bubble-actions cactcho-bubble-actions--summary">
                <button className="is-secondary" type="button" onClick={handleContinue}>
                  Continuar escolhendo
                </button>
                <button type="button" onClick={handleConfirmSummary}>
                  Finalizar pedido
                </button>
              </div>
            </>
          )}

          {bubbleStep === 'name' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Como posso te chamar?
              </strong>
              <p>Vou usar seu nome apenas para identificar este pedido.</p>

              <label className="cactcho-field">
                Seu nome
                <input
                  value={guidedCustomer.name}
                  onChange={(fieldEvent) => updateGuidedCustomer('name', fieldEvent.target.value)}
                  placeholder="Digite seu nome"
                  autoComplete="name"
                  autoFocus
                />
              </label>

              {formError && <p className="cactcho-form-error" role="alert">{formError}</p>}

              <div className="cactcho-bubble-actions">
                <button type="button" onClick={handleNameNext}>Continuar</button>
              </div>
            </>
          )}

          {bubbleStep === 'payment' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Certo, {guidedCustomer.name.split(' ')[0]}!
              </strong>
              <p>Como você prefere pagar?</p>

              <div className="cactcho-payment-options" role="group" aria-label="Forma de pagamento">
                {['Pix', 'Cartão', 'Dinheiro'].map((method) => (
                  <button
                    key={method}
                    type="button"
                    className={guidedCustomer.payment === method ? 'is-selected' : ''}
                    aria-pressed={guidedCustomer.payment === method}
                    onClick={() => handlePaymentSelect(method)}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </>
          )}

          {bubbleStep === 'change' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Vai precisar de troco?
              </strong>
              <p>Se precisar, diga para quanto. Se não, pode seguir sem troco.</p>

              <label className="cactcho-field">
                Troco para
                <input
                  type="text"
                  inputMode="decimal"
                  value={guidedCustomer.changeFor}
                  onChange={(fieldEvent) => updateGuidedCustomer(
                    'changeFor',
                    sanitizeChangeValue(fieldEvent.target.value),
                  )}
                  placeholder="Ex.: 50,00"
                  autoFocus
                />
              </label>

              {formError && <p className="cactcho-form-error" role="alert">{formError}</p>}

              <div className="cactcho-bubble-actions cactcho-bubble-actions--checkout">
                <button className="is-secondary" type="button" onClick={handleNoChange}>
                  Sem troco
                </button>
                <button type="button" onClick={handleChangeNext}>Continuar</button>
              </div>
            </>
          )}

          {bubbleStep === 'note' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Alguma observação?
              </strong>
              <p>É opcional. Se não tiver nada, pode deixar em branco.</p>

              <label className="cactcho-field">
                Observação
                <textarea
                  rows="3"
                  value={guidedCustomer.note}
                  onChange={(fieldEvent) => updateGuidedCustomer('note', fieldEvent.target.value)}
                  placeholder="Ex.: embalagem separada..."
                  autoFocus
                />
              </label>

              <div className="cactcho-bubble-actions">
                <button type="button" onClick={handleReview}>Revisar pedido</button>
              </div>
            </>
          )}

          {bubbleStep === 'review' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Só confirmando:
              </strong>

              <div className="cactcho-customer-review">
                <div><span>Nome</span><strong>{guidedCustomer.name}</strong></div>
                <div><span>Pagamento</span><strong>{guidedCustomer.payment}</strong></div>

                {guidedCustomer.payment === 'Dinheiro' && (
                  <div>
                    <span>Troco</span>
                    <strong>
                      {guidedCustomer.changeFor
                        ? `Para ${formatCurrency(Number(guidedCustomer.changeFor))}`
                        : 'Sem troco'}
                    </strong>
                  </div>
                )}

                <div>
                  <span>Observação</span>
                  <strong>{guidedCustomer.note || 'Sem observações'}</strong>
                </div>

                <div className="is-total">
                  <span>Total</span>
                  <strong>{formatCurrency(cartTotal)}</strong>
                </div>
              </div>

              <p>Os dados estão certos?</p>

              <div className="cactcho-bubble-actions cactcho-bubble-actions--summary">
                <button className="is-secondary" type="button" onClick={() => setBubbleStep('name')}>
                  Alterar dados
                </button>
                <button type="button" onClick={handleConfirmData}>Tudo certo</button>
              </div>
            </>
          )}

          {bubbleStep === 'success' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Perfeito!
              </strong>
              <p>Seu pedido está pronto. Agora é só abrir a mensagem para a Cactus Burguer.</p>

              {!status?.open && (
                <p className="cactcho-closed-message">
                  A loja está fechada agora. Seu carrinho continua salvo.
                </p>
              )}

              {formError && <p className="cactcho-form-error" role="alert">{formError}</p>}

              <div className="cactcho-bubble-actions">
                <button type="button" onClick={handleWhatsApp} disabled={!status?.open}>
                  Abrir WhatsApp
                </button>
              </div>
            </>
          )}

          {bubbleStep === 'sentConfirm' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Conseguiu enviar seu pedido?
              </strong>
              <p>Só vou limpar seu pedido depois da sua confirmação.</p>

              <div className="cactcho-bubble-actions cactcho-bubble-actions--summary">
                <button className="is-secondary" type="button" onClick={handleSentNo}>
                  Ainda não
                </button>
                <button type="button" onClick={handleSentYes}>
                  Sim, enviei
                </button>
              </div>
            </>
          )}

          {bubbleStep === 'done' && (
            <>
              <span className="cactcho-bubble-name">CACTCHÔ</span>
              <strong id="cactcho-dialog-title" className="cactcho-bubble-greeting">
                Pedido concluído!
              </strong>
              <p>Obrigado! Seu pedido foi limpo e já estou pronto para o próximo.</p>

              <div className="cactcho-bubble-actions">
                <button type="button" onClick={closeBubble}>Fechar</button>
              </div>
            </>
          )}
        </section>
      )}

      <aside
        className={`cactcho-stage cactcho-stage--isolated ${compact ? 'is-compact' : ''}`}
        aria-label="Cactchô, mascote da Cactus Burguer"
      >
        <button
          className="cactcho-mascot-button"
          type="button"
          onClick={openBubble}
          aria-label={bubbleOpen ? 'Cactchô está com o atendimento aberto' : 'Abrir atendimento do Cactchô'}
          aria-expanded={bubbleOpen}
          aria-controls="cactcho-dialog"
        >
          <RiveComponent className="cactcho-canvas" />
        </button>
      </aside>
    </>
  );
}
