import { formatCurrency } from '../utils/currency';

export default function ProductCard({ product, number, onCustomize }) {
  const hasCustomization = product.removable.length > 0 || product.additions.length > 0;

  return (
    <article className="product-card">
      <div className="product-number">CACTUS / {String(number).padStart(2, '0')}</div>
      <div className="product-main">
        <div>
          <h3>{product.name}</h3>
          {product.description && <p>{product.description}</p>}
        </div>
        <strong>{formatCurrency(product.price)}</strong>
      </div>
      <button type="button" className="product-action" onClick={() => onCustomize(product)}>
        {hasCustomization ? 'Personalizar' : 'Adicionar'}
      </button>
    </article>
  );
}
