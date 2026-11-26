// Validación de los datos del formulario
function validarItem(data) {
  const errores = [];
  if (!data.nombre || data.nombre.length < 3) {
    errores.push('El nombre debe tener al menos 3 caracteres.');
  }
  if (!data.categoria) {
    errores.push('Selecciona una categoría.');
  }
  if (!Number.isInteger(data.cantidad) || data.cantidad < 1) {
    errores.push('La cantidad debe ser un número entero mayor o igual a 1.');
  }
  if (isNaN(data.precio) || data.precio <= 0) {
    errores.push('El precio por día debe ser mayor que 0.');
  }
  return errores;
}
