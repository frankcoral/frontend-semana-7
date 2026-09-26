import { useEffect } from "react";
import { formatPrice } from "../utils/format";

/**
 * Modal con el detalle completo del videojuego seleccionado.
 *
 * @param {Object} props Propiedades recibidas por el componente.
 * @param {Object|null} props.product Producto seleccionado.
 * @param {Function} props.onClose Función para cerrar el modal.
 * @param {Function} props.onAddToCart Función para agregar el producto al carrito.
 */
function ProductModal({ product, onClose, onAddToCart }) {
  useEffect(() => {
    if (!product) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={handleBackdropClick}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Cerrar detalle del producto"
        >
          ×
        </button>

        <div className="product-modal__image-wrapper">
          <img
            src={product.image}
            alt={`Portada de ${product.name}`}
            className="product-modal__image"
          />
        </div>

        <div className="product-modal__content">
          <span className="product-card__category">{product.category}</span>
          <h2 id="product-modal-title">{product.name}</h2>
          <p className="product-modal__description">{product.description}</p>

          <div className="product-modal__prices">
            <span className="product-card__price-normal">
              {formatPrice(product.price)}
            </span>
            <strong className="product-card__price-offer">
              {formatPrice(product.offerPrice)}
            </strong>
          </div>

          <div className="product-modal__actions">
            <button
              type="button"
              className="product-modal__secondary"
              onClick={onClose}
            >
              Cerrar
            </button>
            <button
              type="button"
              className="product-modal__primary"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductModal;
