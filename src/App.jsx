import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import BackToTop from './components/BackToTop';
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
  const [cartOpen, setCartOpen] = useState(false);
  const [status, setStatus] = useState(() => getStoreStatus());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => saveCart(cart), [cart]);
  useEffect(() => saveCustomer(customer), [customer]);

  useEffect(() => {
    const statusTimer = window.setInterval(() => setStatus(getStoreStatus()), 60_000);
    const onScroll = () => setShowBackToTop(window.scrollY > 550);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearInterval(statusTimer);
      window.removeEventListener('scroll', onScroll);
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
      setNotice('Alterações salvas no pedido.');
    } else {
      setCart((current) => [...current, {
        cartId: createCartId(selectedProduct.id),
        productId: selectedProduct.id,
        name: selectedProduct.name,
        unitPrice: selectedProduct.price,
        quantity: 1,
        ...customization,
      }]);
      setNotice(`${selectedProduct.name} adicionado ao pedido.`);
    }

    closeProduct();
    window.setTimeout(() => setNotice(''), 2200);
  }

  function changeQuantity(cartId, delta) {
    setCart((current) => current
      .map((item) => item.cartId === cartId
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item)
      .filter((item) => item.quantity > 0));
  }

  function removeItem(cartId) {
    setCart((current) => current.filter((item) => item.cartId !== cartId));
  }

  function editItem(item) {
    const product = products.find((entry) => entry.id === item.productId);
    if (product) {
      setCartOpen(false);
      openProduct(product, item);
    }
  }

  function changeCustomer(field, value) {
    setCustomer((current) => ({ ...current, [field]: value }));
  }

  function handleSendOrder() {
    const currentStatus = getStoreStatus();
    setStatus(currentStatus);

    if (!currentStatus.open) {
      setNotice('Estamos fechados no momento. Nosso horário de funcionamento é das 8h às 21h.');
      return;
    }

    if (!customer.name.trim()) {
      setNotice('Digite seu nome antes de enviar o pedido.');
      return;
    }

    if (!cart.length) {
      setNotice('Adicione pelo menos um item ao pedido.');
      return;
    }

    if (customer.payment === 'Dinheiro' && customer.changeFor && Number(customer.changeFor) <= 0) {
      setNotice('Informe um valor válido para o troco.');
      return;
    }

    const message = buildWhatsAppMessage({ cart, customer });
    openWhatsApp(message);
  }

  return (
    <>
      <Header status={status} cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <CategoryNav categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />

      <main className="menu-main" id="cardapio">
        <section className="menu-heading">
          <div>
            <span>FEITO PARA MATAR SUA FOME</span>
            <h2>Nosso cardápio</h2>
          </div>
          <p>Escolha, personalize e envie seu pedido pelo WhatsApp.</p>
        </section>

        <section className="products-grid" aria-live="polite">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              number={index + 1}
              onCustomize={openProduct}
            />
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <strong>{STORE.name}</strong>
        <p>{STORE.tagline}</p>
        <p>Retirada: {STORE.address}</p>
        <p>Funcionamento: todos os dias, das 8h às 21h.</p>
        <p>Pagamento: cartão, Pix e dinheiro.</p>
        <small>Pedidos pelo WhatsApp · Sujeitos à confirmação da loja</small>
      </footer>

      <button className="mobile-cart-button" type="button" onClick={() => setCartOpen(true)}>
        <span>Meu pedido</span><strong>{cartCount}</strong>
      </button>

      <BackToTop visible={showBackToTop} />

      {notice && <div className="toast" role="status">{notice}</div>}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          editingItem={editingItem}
          onClose={closeProduct}
          onSave={saveProductCustomization}
        />
      )}

      <CartDrawer
        open={cartOpen}
        cart={cart}
        customer={customer}
        status={status}
        onClose={() => setCartOpen(false)}
        onChangeCustomer={changeCustomer}
        onChangeQuantity={changeQuantity}
        onRemove={removeItem}
        onEdit={editItem}
        onSend={handleSendOrder}
      />
    </>
  );
}
