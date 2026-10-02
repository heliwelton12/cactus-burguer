import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import BackToTop from './components/BackToTop';
import CactchoMascot from './components/CactchoMascot';
import { STORE } from './config/store';
import { categories, products } from './data/menu';
import { getStoreStatus } from './utils/openingHours';
import { loadCart, loadCustomer, saveCart, saveCustomer } from './utils/storage';
import { buildWhatsAppMessage, openWhatsApp } from './utils/whatsapp';

const initialCustomer = {
  name: '',
  payment: 'Pix',
  changeFor: '',
  note: '',
};

function createCartId(productId) {
  return `${productId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [cart, setCart] = useState(() => loadCart());
  const [customer, setCustomer] = useState(() => ({ ...initialCustomer, ...loadCustomer() }));
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [status, setStatus] = useState(() => getStoreStatus());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [cactchoEvent, setCactchoEvent] = useState(null);
  const [recentProductId, setRecentProductId] = useState(null);
  const [orderVersion, setOrderVersion] = useState(0);
  const highlightTimerRef = useRef(null);

  useEffect(() => saveCart(cart), [cart]);
  useEffect(() => saveCustomer(customer), [customer]);

  useEffect(() => {
    const statusTimer = window.setInterval(() => setStatus(getStoreStatus()), 60_000);
    const onScroll = () => setShowBackToTop(window.scrollY > 550);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearInterval(statusTimer);
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(highlightTimerRef.current);
    };
  }, []);

  const visibleProducts = useMemo(
    () => products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  function openProduct(product, item = null) {
    setSelectedProduct(product);
    setEditingItem(item);
  }

  function closeProduct() {
    setSelectedProduct(null);
    setEditingItem(null);
  }

  function saveProductCustomization(customization) {
    if (!selectedProduct) return;

    if (editingItem) {
      setCart((current) => current.map((item) => (
        item.cartId === editingItem.cartId
          ? { ...item, ...customization }
          : item
      )));

      setOrderVersion((current) => current + 1);
      setCactchoEvent({
        id: `${editingItem.cartId}-${Date.now()}`,
        type: 'item-updated',
        productName: selectedProduct.name,
      });
    } else {
      setCart((current) => [...current, {
        cartId: createCartId(selectedProduct.id),
        productId: selectedProduct.id,
        name: selectedProduct.name,
        unitPrice: selectedProduct.price,
        quantity: 1,
        ...customization,
      }]);

      setOrderVersion((current) => current + 1);
      setRecentProductId(selectedProduct.id);
      window.clearTimeout(highlightTimerRef.current);
      highlightTimerRef.current = window.setTimeout(() => {
        setRecentProductId(null);
      }, 1600);

      setCactchoEvent({
        id: `${selectedProduct.id}-${Date.now()}`,
        type: 'item-added',
        productName: selectedProduct.name,
      });

    }

    closeProduct();
  }

  function changeQuantity(cartId, delta) {
    setCart((current) => current
      .map((item) => item.cartId === cartId
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item)
      .filter((item) => item.quantity > 0));
    setOrderVersion((current) => current + 1);
  }

  function removeItem(cartId) {
    setCart((current) => current.filter((item) => item.cartId !== cartId));
    setOrderVersion((current) => current + 1);
  }

  function editItem(item) {
    const product = products.find((entry) => entry.id === item.productId);

    if (product) {
      openProduct(product, item);
    }
  }

  function sendOrderWithCustomer(customerData) {
    const currentStatus = getStoreStatus();
    setStatus(currentStatus);

    if (!currentStatus.open) {
      return {
        ok: false,
        message: 'Estamos fechados no momento. Nosso horário é das 8h às 21h.',
      };
    }

    if (!customerData.name.trim()) {
      return {
        ok: false,
        message: 'Digite seu nome antes de enviar o pedido.',
      };
    }

    if (!cart.length) {
      return {
        ok: false,
        message: 'Adicione pelo menos um item ao pedido.',
      };
    }

    if (
      customerData.payment === 'Dinheiro'
      && customerData.changeFor
      && Number(customerData.changeFor) <= 0
    ) {
      return {
        ok: false,
        message: 'Informe um valor válido para o troco.',
      };
    }

    setCustomer(customerData);

    const message = buildWhatsAppMessage({
      cart,
      customer: customerData,
    });

    openWhatsApp(message);
    return { ok: true };
  }

  function handleGuidedCustomerSave(customerData) {
    setCustomer(customerData);
  }

  function handleGuidedSend(customerData) {
    return sendOrderWithCustomer(customerData);
  }

  function clearCompletedOrder() {
    setCart([]);
    setCustomer(initialCustomer);
    setOrderVersion((current) => current + 1);
  }

  return (
    <>
      <Header
        status={status}
        cartCount={cartCount}
        orderVersion={orderVersion}
        onOpenCart={() => {
          setCactchoEvent({
            id: `open-order-${Date.now()}`,
            type: 'open-order',
          });
        }}
      />

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <main className="menu-main" id="cardapio">
        <section className="menu-heading menu-heading-simple">
          <div>
            <span>FEITO PARA MATAR SUA FOME</span>
            <h2>Nosso cardápio</h2>
          </div>
        </section>

        <section
          className="products-grid products-grid--transition"
          key={activeCategory}
          aria-live="polite"
        >
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              number={index + 1}
              highlighted={recentProductId === product.id}
              onCustomize={openProduct}
            />
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span>CACTUS</span>
          <strong>BURGUER</strong>
        </div>

        <p>{STORE.tagline}</p>

        <div className="footer-info">
          <p><strong>Retirada:</strong> {STORE.address}</p>
          <p><strong>Funcionamento:</strong> todos os dias, das 8h às 21h.</p>
          <p><strong>Pagamento:</strong> cartão, Pix e dinheiro.</p>
        </div>

        <small>Pedidos pelo WhatsApp · Sujeitos à confirmação da loja</small>
      </footer>

      <BackToTop visible={showBackToTop} />

      <CactchoMascot
        event={cactchoEvent}
        cart={cart}
        customer={customer}
        status={status}
        onSaveCustomer={handleGuidedCustomerSave}
        onSendOrder={handleGuidedSend}
        onChangeQuantity={changeQuantity}
        onRemoveItem={removeItem}
        onEditItem={editItem}
        onClearOrder={clearCompletedOrder}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          editingItem={editingItem}
          onClose={closeProduct}
          onSave={saveProductCustomization}
        />
      )}

    </>
  );
}
