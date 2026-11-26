// UPDATE: obtiene y actualiza un artículo existente
function obtenerItem(id) {
  return leerItems().find(function (i) { return i.id === id; }) || null;
}

function actualizarItem(id, data) {
  const items = leerItems();
  const pos = items.findIndex(function (i) { return i.id === id; });
  if (pos === -1) return false;
  items[pos] = Object.assign({ id: id }, data);
  guardarItems(items);
  return true;
}
