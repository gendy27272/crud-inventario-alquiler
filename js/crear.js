// CREATE: agrega un artículo al inventario
function crearItem(data) {
  const items = leerItems();
  const item = Object.assign({ id: Date.now().toString() }, data);
  items.push(item);
  guardarItems(items);
  return item;
}
