import { formatCurrency } from '../utils/currency';

function itemUnitTotal(item) {
  return item.unitPrice + item.additions.reduce((sum, addition) => sum + addition.price, 0);
}

export default function CartDrawer({
  open,
  cart,
  customer,
  status,
  onClose,
  onChangeCustomer,
  onChangeQuantity,
  onRemove,
  onEdit,
  onSend,
}) {
  if (!open) return null;

  const total = cart.reduce((sum, item) => sum + itemUnitTotal(item) * item.quantity, 0);

  return (
    <div className="drawer-root" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <button className="modal-backdrop" type="button" aria-label="Fechar pedido" onClick={onClose} />
      <aside className="cart-drawer">
        <div className="cart-heading">
          <div>
            <span>SEU PEDIDO</span>
            <h2 id="cart-title">Meu pedido</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Fechar">×</button>
        </div>

        <div className="cart-list">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <strong>Seu pedido está vazio.</strong>
              <p>Escolha um item no cardápio para começar.</p>
            </div>
          ) : cart.map((item) => (
            <article className="cart-item" key={item.cartId}>
              <div className="cart-item-top">
                <div>
                  <h3>{item.name}</h3>
                  <strong>{formatCurrency(itemUnitTotal(item) * item.quantity)}</strong>
                </div>
                <button type="button" onClick={() => onRemove(item.cartId)}>Remover</button>
              </div>

              {item.removedIngredients.length > 0 && (
                <p className="cart-detail">Sem: {item.removedIngredients.join(', ')}</p>
              )}
              {item.additions.length > 0 && (
                <p className="cart-detail">Adicionais: {item.additions.map((addition) => addition.name).join(', ')}</p>
              )}
              {item.note && <p className="cart-detail">Obs.: {item.note}</p>}

              <div className="cart-controls">
                <div className="quantity-control" aria-label={`Quantidade de ${item.name}`}>
                  <button type="button" onClick={() => onChangeQuantity(item.cartId, -1)}>−</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => onChangeQuantity(item.cartId, 1)}>+</button>
                </div>
                <button type="button" className="edit-item" onClick={() => onEdit(item)}>Editar</button>
              </div>
            </article>
          ))}
        </div>

        <div className="checkout-block">
          <div className="cart-total"><span>Total</span><strong>{formatCurrency(total)}</strong></div>

          <label className="field-label">
            Seu nome
            <input
              value={customer.name}
              onChange={(event) => onChangeCustomer('name', event.target.value)}
              placeholder="Digite seu nome"
              autoComplete="name"
            />
          </label>

          <fieldset className="payment-fieldset">
            <legend>Forma de pagamento</legend>
            <div className="payment-options">
              {['Pix', 'Cartão', 'Dinheiro'].map((method) => (
                <label key={method}>
                  <input
                    type="radio"
                    name="payment"
                    checked={customer.payment === method}
                    onChange={() => onChangeCustomer('payment', method)}
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {customer.payment === 'Dinheiro' && (
            <label className="field-label">
              Troco para quanto?
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="0.01"
                value={customer.changeFor}
                onChange={(event) => onChangeCustomer('changeFor', event.target.value)}
                placeholder="Ex.: 50,00"
              />
            </label>
          )}

          <label className="field-label">
            Observações gerais
            <textarea
              rows="3"
              value={customer.note}
              onChange={(event) => onChangeCustomer('note', event.target.value)}
              placeholder="Alguma observação para a loja?"
            />
          </label>

          {!status.open && (
            <p className="closed-warning">
              Estamos fechados no momento. Nosso horário de funcionamento é das 8h às 21h.
            </p>
          )}

          <button type="button" className="whatsapp-action" disabled={!cart.length} onClick={onSend}>
            Enviar pedido no WhatsApp
          </button>
          <small>O pedido será enviado para confirmação da Cactus Burguer.</small>
        </div>
      </aside>
    </div>
  );
}
