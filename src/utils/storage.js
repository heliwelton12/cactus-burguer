const CART_KEY = 'cactus-burguer-cart-v1';
const CUSTOMER_KEY = 'cactus-burguer-customer-v1';

export function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function loadCustomer() {
  try {
    return JSON.parse(localStorage.getItem(CUSTOMER_KEY)) ?? {};
  } catch {
    return {};
  }
}

export function saveCustomer(customer) {
  localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer));
}
