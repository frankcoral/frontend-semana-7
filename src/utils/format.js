/**
 * Formatea un valor numérico como moneda chilena.
 *
 * @param {number} value Precio que se desea formatear.
 * @returns {string} Precio expresado en pesos chilenos.
 */
export const formatPrice = (value) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
