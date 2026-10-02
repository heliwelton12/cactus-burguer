const CART_KEY = 'cactus-burguer-cart-v1';
const CUSTOMER_KEY = 'cactus-burguer-customer-v1';
const CACTCHO_SESSION_KEY = 'cactus-burguer-cactcho-session-v1';

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

export function loadCart() {
  return readJson(CART_KEY, []);
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function loadCustomer() {
  return readJson(CUSTOMER_KEY, {});
}

export function saveCustomer(customer) {
  localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer));
}

export function loadCactchoSession() {
  return readJson(CACTCHO_SESSION_KEY, null);
}

export function saveCactchoSession(session) {
  localStorage.setItem(CACTCHO_SESSION_KEY, JSON.stringify(session));
}

export function clearCactchoSession() {
  localStorage.removeItem(CACTCHO_SESSION_KEY);
}
