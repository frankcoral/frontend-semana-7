/**
 * Campo de búsqueda para filtrar videojuegos por nombre o categoría.
 *
 * @param {Object} props Propiedades recibidas por el componente.
 * @param {string} props.search Valor actual de búsqueda.
 * @param {Function} props.onSearchChange Función que actualiza la búsqueda.
 */
function SearchBar({ search, onSearchChange }) {
  return (
    <section className="search-section" aria-labelledby="search-title">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Encuentra tu juego</p>
        <h2 id="search-title">Buscar videojuegos</h2>
      </div>

      <label htmlFor="game-search" className="search-label">
        Nombre o categoría
      </label>

      <input
        id="game-search"
        type="search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Ej: Minecraft, Carreras..."
        className="search-input"
      />
    </section>
  );
}

export default SearchBar;
