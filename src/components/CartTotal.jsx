import { formatPrice } from "../utils/format";

/**
 * Calcula y muestra el precio total del carrito.
 *
 * @param {Object} props Propiedades recibidas por el componente.
 * @param {Array} props.cart Productos agregados al carrito.
 */
function CartTotal({ cart }) {
  const total = cart.reduce(
    (accumulator, product) => accumulator + product.offerPrice,
    0,
  );

  return (
    <div className="cart-total">
      <span>Total</span>
      <strong>{formatPrice(total)}</strong>
    </div>
  );
}

export default CartTotal;
