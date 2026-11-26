// Persistencia en localStorage
const CLAVE_INVENTARIO = 'inventario_alquiler';

function leerItems() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_INVENTARIO)) || [];
  } catch (e) {
    return [];
  }
}

function guardarItems(items) {
  localStorage.setItem(CLAVE_INVENTARIO, JSON.stringify(items));
}
