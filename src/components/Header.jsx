import { STORE } from '../config/store';
import StoreStatus from './StoreStatus';

export default function Header({ status, cartCount, onOpenCart }) {
  return (
    <header className="site-header" id="topo">
      <div className="top-strip">RETIRADA NO LOCAL · TODOS OS DIAS DAS 8H ÀS 21H</div>
      <div className="hero-shell">
        <div className="brand-lockup" aria-label="Cactus Burguer">
          <span className="brand-kicker">NORDESTE É TRADIÇÃO</span>
          <h1>CACTUS <span>BURGUER</span></h1>
          <p>{STORE.tagline}</p>
        </div>

        <div className="hero-info">
          <StoreStatus status={status} />
          <p>{STORE.address}</p>
          <p>Cartão · Pix · Dinheiro</p>
        </div>

        <button className="desktop-cart-button" type="button" onClick={onOpenCart}>
          Meu pedido <span>{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
