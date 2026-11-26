// DELETE: elimina un artículo previa confirmación
function eliminarItem(id) {
  if (!confirm('¿Seguro que deseas eliminar este artículo?')) return false;
  const items = leerItems().filter(function (i) { return i.id !== id; });
  guardarItems(items);
  return true;
}
