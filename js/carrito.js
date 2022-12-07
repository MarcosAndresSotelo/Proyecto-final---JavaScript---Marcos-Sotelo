
const localStorageCarrito = localStorage.getItem('guardarCarrito')
const carritoParseado = JSON.parse(localStorageCarrito);
const botonFinalizarCompra = document.getElementById("botonFinalizarCompra")


const mostrarCarrito = (producto) => {
  const carritoLista = document.querySelector('#carritoLista tbody')
  const { id, nombre, precio, descripcion, cantidad, img } = producto
  const row = document.createElement("tr")
  carritoLista.appendChild(row);
  row.innerHTML += `
  <td><img class="img-fluid imgCarrito" src="${img}" /></td>
  <td>${nombre}</td>
  <td>$${precio}</td>
  <td>${cantidad}</td>
  <td>$${cantidad * precio}</td>
  `;
}


function mostrarProductosCarrito() {
  let total = 0
  carritoParseado.forEach(producto => {
    total += (producto.precio * producto.cantidad)
    mostrarCarrito(producto);
  })
  precioFinal.textContent = total
}
mostrarProductosCarrito()



function sweetAlert() {
 Swal.fire({
  title: '¿Quiere finalizar su compra?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Comprar',
  denyButtonText: `Cancelar compra`,
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Compra realizada!', ' Vuelva pronto', 'success')
    localStorage.removeItem("guardarCarrito")

  } else if (result.isDenied) {
    Swal.fire('Usted a cancelado su compra', '', 'info')
  }
})
}

botonFinalizarCompra.addEventListener("click", () => {

  const spinnerCarrito = document.querySelector("#spinner")
  spinnerCarrito.classList.add("d-flex")
  spinnerCarrito.classList.remove("d-none")

  setTimeout(() => {
    spinnerCarrito.classList.remove("d-flex")
    spinnerCarrito.classList.add("d-none")
  }, 1500)

  setTimeout(sweetAlert, 1500)

})

