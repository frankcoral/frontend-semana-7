import CartTotal from "./CartTotal";
import { formatPrice } from "../utils/format";

/**
 * Muestra los productos agregados al carrito.
 *
 * @param {Object} props Propiedades recibidas por el componente.
 * @param {Array} props.cart Productos agregados al carrito.
 * @param {Function} props.onRemoveFromCart Función para quitar un producto.
 */
function Cart({ cart, onRemoveFromCart }) {
  return (
    <section id="carrito" className="cart-section">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Tu compra</p>
        <h2>Carrito de compras</h2>
        <p>
          {cart.length} {cart.length === 1 ? "producto" : "productos"} en el
          carrito
        </p>
      </div>

      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((product) => (
              <article className="cart-item" key={product.cartItemId}>
                <div>
                  <h3>{product.name}</h3>
                  <p>{formatPrice(product.offerPrice)}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveFromCart(product.cartItemId)}
                  className="cart-item__remove"
                  aria-label={`Quitar ${product.name} del carrito`}
                >
                  Quitar
                </button>
              </article>
            ))}
          </div>

          <CartTotal cart={cart} />
        </>
      )}
    </section>
  );
}

export default Cart;
