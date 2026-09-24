import { STORE } from '../config/store';
import { formatCurrency } from './currency';

function itemTotal(item) {
  const additions = item.additions.reduce((sum, addition) => sum + addition.price, 0);
  return (item.unitPrice + additions) * item.quantity;
}

export function buildWhatsAppMessage({ cart, customer }) {
  const lines = [
    'Olá! Gostaria de fazer um pedido na Cactus Burguer.',
    '',
    `Nome: ${customer.name.trim()}`,
    '',
    'PEDIDO',
    '',
  ];

  cart.forEach((item) => {
    lines.push(`${item.quantity}x ${item.name} — ${formatCurrency(itemTotal(item))}`);

    if (item.removedIngredients.length) {
      lines.push(`Retirar: ${item.removedIngredients.join(', ')}`);
    }

    if (item.additions.length) {
      lines.push(`Adicionais: ${item.additions.map((addition) => `${addition.name} (+${formatCurrency(addition.price)})`).join(', ')}`);
    }

    if (item.note?.trim()) {
      lines.push(`Obs. do item: ${item.note.trim()}`);
    }

    lines.push('');
  });

  lines.push(`Forma de pagamento: ${customer.payment}`);

  if (customer.payment === 'Dinheiro' && customer.changeFor) {
    lines.push(`Troco para: ${formatCurrency(Number(customer.changeFor))}`);
  }

  lines.push('', 'Observações:');
  lines.push(customer.note?.trim() || 'Sem observações.');
  lines.push('', 'Retirada no local:');
  lines.push(STORE.address);

  const total = cart.reduce((sum, item) => sum + itemTotal(item), 0);
  lines.push('', `TOTAL: ${formatCurrency(total)}`);

  return lines.join('\n');
}

export function openWhatsApp(message) {
  const url = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
}
