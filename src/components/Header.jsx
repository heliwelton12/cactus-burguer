import { STORE } from '../config/store';
import StoreStatus from './StoreStatus';

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.15 6-11A6 6 0 0 0 6 10c0 5.85 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 9h18M7 15h4" />
    </svg>
  );
}

export default function Header({ status, cartCount, orderVersion, onOpenCart }) {
  return (
    <>
      <div className="top-strip">
        TODOS OS DIAS · 8H ÀS 21H
      </div>

      <nav className="sticky-site-nav" aria-label="Navegação principal">
        <div className="sticky-site-nav-inner">
          <a className="mini-brand" href="#topo" aria-label="Cactus Burguer - voltar ao topo">
            <strong>CACTUS</strong>
            <span>BURGUER</span>
          </a>

          <div className="header-status" aria-label="Status atual da loja">
            <StoreStatus status={status} compact />
          </div>

          <button
            className={`sticky-cart-button ${cartCount > 0 ? 'has-items' : ''}`}
            type="button"
            onClick={onOpenCart}
            aria-label={`Abrir meu pedido com ${cartCount} ${cartCount === 1 ? 'item' : 'itens'}`}
          >
            <span className="cart-text cart-text-desktop">Meu pedido</span>
            <span className="cart-text cart-text-mobile">Pedido</span>
            <strong key={`${cartCount}-${orderVersion}`} className="order-count-bump">
              {cartCount}
            </strong>
          </button>
        </div>
      </nav>

      <header className="site-header" id="topo">
        <div className="hero-photo-layer" aria-hidden="true">
          <img
            src="/images/cactus-hero-original.webp"
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="hero-shell">
          <div className="hero-copy">
            <span className="brand-kicker">NORDESTE É TRADIÇÃO</span>

            <h1 className="hero-headline hero-headline-primary">
              É sabor. É Cactus!
            </h1>

            <span className="hero-divider" aria-hidden="true" />

            <p className="hero-description">
              Escolha seus favoritos, personalize do seu jeito e combine a retirada pelo WhatsApp.
            </p>

            <div className="hero-actions">
              <a className="hero-primary-action" href="#cardapio">
                Explorar cardápio <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-meta-row hero-meta-row-compact">
          <div className="hero-meta-card meta-card-with-icon">
            <span className="meta-icon"><LocationIcon /></span>
            <div>
              <span className="meta-label">RETIRADA</span>
              <strong>{STORE.address}</strong>
            </div>
          </div>

          <div className="hero-meta-card meta-card-with-icon">
            <span className="meta-icon"><PaymentIcon /></span>
            <div>
              <span className="meta-label">PAGAMENTO</span>
              <strong>Cartão · Pix · Dinheiro</strong>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
