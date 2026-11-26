// Controlador principal: conecta el formulario y la tabla con las operaciones CRUD
const form = document.getElementById('form-item');
const listaErrores = document.getElementById('errores');
const btnCancelar = document.getElementById('btn-cancelar');
let editandoId = null;

function mostrarErrores(errores) {
  listaErrores.innerHTML = errores.map(e => '<li>' + e + '</li>').join('');
}

function salirDeEdicion() {
  editandoId = null;
  form.reset();
  btnCancelar.hidden = true;
  document.getElementById('btn-guardar').textContent = 'Guardar';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = {
    nombre: document.getElementById('nombre').value.trim(),
    categoria: document.getElementById('categoria').value,
    cantidad: Number(document.getElementById('cantidad').value),
    precio: Number(document.getElementById('precio').value)
  };
  const errores = validarItem(data);
  mostrarErrores(errores);
  if (errores.length > 0) return;

  if (editandoId) {
    actualizarItem(editandoId, data);
  } else {
    crearItem(data);
  }
  salirDeEdicion();
  renderTabla();
});

btnCancelar.addEventListener('click', function () {
  mostrarErrores([]);
  salirDeEdicion();
});

document.getElementById('tabla-items').addEventListener('click', function (e) {
  const boton = e.target.closest('button[data-accion]');
  if (!boton) return;
  const id = boton.dataset.id;
  if (boton.dataset.accion === 'editar') {
    const item = obtenerItem(id);
    if (!item) return;
    editandoId = id;
    document.getElementById('nombre').value = item.nombre;
    document.getElementById('categoria').value = item.categoria;
    document.getElementById('cantidad').value = item.cantidad;
    document.getElementById('precio').value = item.precio;
    document.getElementById('btn-guardar').textContent = 'Actualizar';
    btnCancelar.hidden = false;
  } else if (boton.dataset.accion === 'eliminar') {
    if (eliminarItem(id) && editandoId === id) salirDeEdicion();
    renderTabla();
  }
});

renderTabla();
