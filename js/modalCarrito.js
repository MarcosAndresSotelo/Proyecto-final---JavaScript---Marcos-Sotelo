
// Modal carrito

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  modalCarrito();
})

const carritoContenedor = document.querySelector('#carritoContenedor')
const precioTotal = document.querySelector("#precioTotal")


const modalCarrito = () => {
  const modalBody = document.querySelector('.modal .modal-body')
  modalBody.innerHTML = ''
  carrito.forEach((producto) => {
    const { id, nombre, precio, descripcion, cantidad, img } = producto
    modalBody.innerHTML += `
      <div class="modalContenedor">
        <div>
        <img class="img-fluid imgCarrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      `;
  })
  guardarModal()
  carritoContenedor.textContent = carrito.length
  precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

function eliminarProducto(id) {
  const idProd = id
  carrito = carrito.filter((prod) => prod.id !== idProd)
  modalCarrito()
}

function guardarModal() {
  localStorage.setItem('guardarCarrito', JSON.stringify(carrito))
}
