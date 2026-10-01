import { formatCurrency } from '../utils/currency';

export default function ProductCard({ product, number, onCustomize }) {
  const hasCustomization = product.removable.length > 0 || product.additions.length > 0;

  return (
    <article className="product-card">
      <div className="product-card-accent" aria-hidden="true" />

      <div className="product-card-header">
        <span className="product-number">CACTUS / {String(number).padStart(2, '0')}</span>
        <strong className="product-price">{formatCurrency(product.price)}</strong>
      </div>

      <div className="product-main">
        <div>
          <h3>{product.name}</h3>
          {product.description && <p>{product.description}</p>}
        </div>
      </div>

      <button
        type="button"
        className="product-action"
        onClick={() => onCustomize(product)}
        aria-label={`${hasCustomization ? 'Personalizar' : 'Adicionar'} ${product.name}`}
      >
        <span>{hasCustomization ? 'Personalizar' : 'Adicionar'}</span>
        <strong aria-hidden="true">+</strong>
      </button>
    </article>
  );
}
