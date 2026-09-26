import ProductCard from "./ProductCard";

/**
 * Renderiza el listado de productos disponibles.
 *
 * @param {Object} props Propiedades recibidas por el componente.
 * @param {Array} props.products Lista de productos.
 * @param {Function} props.onAddToCart Función para agregar productos al carrito.
 * @param {Function} props.onViewDetails Función para mostrar detalles del producto.
 */
function ProductList({ products, onAddToCart, onViewDetails }) {
  return (
    <section id="productos" className="products-section">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Catálogo</p>
        <h2>Videojuegos disponibles</h2>
        <p>
          Descubre nuestras ofertas y agrega tus videojuegos favoritos al
          carrito.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
