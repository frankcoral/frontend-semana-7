import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";
import ProductModal from "./components/ProductModal";
import products from "./data/products";
import "./App.css";

const CART_STORAGE_KEY = "gamezone-cart";

function getStoredCart() {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("No fue posible recuperar el carrito guardado.", error);
    return [];
  }
}

function App() {
  const [cart, setCart] = useState(getStoredCart);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [notification, setNotification] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!notification) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setNotification(null);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [notification]);

  const showNotification = (text) => {
    setNotification({
      id: Date.now(),
      text,
    });
  };

  const addToCart = (product) => {
    const cartItem = {
      ...product,
      cartItemId: `${product.id}-${Date.now()}`,
    };

    setCart((currentCart) => [...currentCart, cartItem]);
    showNotification(`${product.name} fue agregado al carrito.`);
  };

  const removeFromCart = (cartItemId) => {
    const removedProduct = cart.find(
      (product) => product.cartItemId === cartItemId,
    );

    setCart((currentCart) =>
      currentCart.filter((product) => product.cartItemId !== cartItemId),
    );

    if (removedProduct) {
      showNotification(`${removedProduct.name} fue eliminado del carrito.`);
    }
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  const closeProductModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const normalizedSearch = search.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Todas" || product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.category.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar cartCount={cart.length} onCategoryChange={changeCategory} />

      {notification && (
        <div
          key={notification.id}
          className="toast-message"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="toast-message__icon" aria-hidden="true">
            ✓
          </span>
          <span>{notification.text}</span>
        </div>
      )}

      <main id="inicio" className="main-content">
        <header className="hero">
          <p className="hero__eyebrow">GameZone</p>
          <h1>Tu próxima aventura comienza aquí</h1>
          <p>
            Descubre videojuegos destacados, ofertas especiales y arma tu
            carrito de forma rápida y sencilla.
          </p>
          <a href="#productos" className="hero__button">
            Ver catálogo
          </a>
        </header>

        <Carousel />

        <SearchBar search={search} onSearchChange={setSearch} />

        {filteredProducts.length > 0 ? (
          <ProductList
            products={filteredProducts}
            onAddToCart={addToCart}
            onViewDetails={setSelectedProduct}
          />
        ) : (
          <section id="productos" className="products-section">
            <p className="products-empty">
              No se encontraron videojuegos para la búsqueda o categoría
              seleccionada.
            </p>
          </section>
        )}

        <Cart cart={cart} onRemoveFromCart={removeFromCart} />
      </main>

      <footer className="footer">
        <p>© 2026 GameZone. Todos los derechos reservados.</p>
        <p>Contacto: contacto@gamezone.cl</p>
      </footer>

      <ProductModal
        product={selectedProduct}
        onClose={closeProductModal}
        onAddToCart={addToCart}
      />
    </>
  );
}

export default App;
