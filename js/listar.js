// READ: muestra los artículos en la tabla
function escaparHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

function renderTabla() {
  const cuerpo = document.getElementById('tabla-items');
  const items = leerItems();
  if (items.length === 0) {
    cuerpo.innerHTML = '<tr><td class="vacio" colspan="5">No hay artículos registrados.</td></tr>';
    return;
  }
  cuerpo.innerHTML = items.map(function (i) {
    return '<tr>' +
      '<td>' + escaparHtml(i.nombre) + '</td>' +
      '<td>' + escaparHtml(i.categoria) + '</td>' +
      '<td>' + i.cantidad + '</td>' +
      '<td>RD$ ' + Number(i.precio).toFixed(2) + '</td>' +
      '<td>' +
        '<button class="secundario" data-accion="editar" data-id="' + i.id + '">Editar</button> ' +
        '<button class="peligro" data-accion="eliminar" data-id="' + i.id + '">Eliminar</button>' +
      '</td></tr>';
  }).join('');
}
