import { useEffect, useMemo, useState } from 'react';
import { formatCurrency } from '../utils/currency';

export default function ProductModal({ product, editingItem, onClose, onSave }) {
  const [removedIngredients, setRemovedIngredients] = useState([]);
  const [selectedAdditions, setSelectedAdditions] = useState([]);
  const [note, setNote] = useState('');

  useEffect(() => {
    setRemovedIngredients(editingItem?.removedIngredients ?? []);
    setSelectedAdditions(editingItem?.additions?.map((addition) => addition.name) ?? []);
    setNote(editingItem?.note ?? '');
  }, [product, editingItem]);

  const additions = useMemo(
    () => product.additions.filter((addition) => selectedAdditions.includes(addition.name)),
    [product.additions, selectedAdditions],
  );

  const unitTotal = product.price + additions.reduce((sum, addition) => sum + addition.price, 0);

  function toggleRemoved(ingredient) {
    setRemovedIngredients((current) =>
      current.includes(ingredient)
        ? current.filter((item) => item !== ingredient)
        : [...current, ingredient],
    );
  }

  function toggleAddition(name) {
    setSelectedAdditions((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  }

  return (
    <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
      <button className="modal-backdrop" type="button" aria-label="Fechar personalização" onClick={onClose} />
      <section className="product-modal">
        <div className="modal-heading">
          <div>
            <span>MONTE DO SEU JEITO</span>
            <h2 id="product-modal-title">{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Fechar">×</button>
        </div>

        {product.removable.length > 0 && (
          <fieldset>
            <legend>Retirar ingredientes</legend>
            <div className="option-grid">
              {product.removable.map((ingredient) => (
                <label key={ingredient} className="check-option">
                  <input
                    type="checkbox"
                    checked={removedIngredients.includes(ingredient)}
                    onChange={() => toggleRemoved(ingredient)}
                  />
                  <span>Sem {ingredient}</span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {product.additions.length > 0 && (
          <fieldset>
            <legend>Adicionais</legend>
            <div className="option-grid">
              {product.additions.map((addition) => (
                <label key={addition.name} className="check-option with-price">
                  <input
                    type="checkbox"
                    checked={selectedAdditions.includes(addition.name)}
                    onChange={() => toggleAddition(addition.name)}
                  />
                  <span>{addition.name}</span>
                  <strong>+ {formatCurrency(addition.price)}</strong>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <label className="field-label">
          Observação do item
          <textarea
            rows="3"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Ex.: caprichar no molho..."
          />
        </label>

        <button
          type="button"
          className="primary-action"
          onClick={() => onSave({ removedIngredients, additions, note })}
        >
          {editingItem ? 'Salvar alterações' : 'Adicionar ao pedido'} · {formatCurrency(unitTotal)}
        </button>
      </section>
    </div>
  );
}
