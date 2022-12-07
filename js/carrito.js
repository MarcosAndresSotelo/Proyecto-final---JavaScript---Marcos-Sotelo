// const localStorageCarrito = localStorage.getItem('carrito')
// const carritoParseado = JSON.parse(localStorageCarrito);

// function mostrarCarrito(producto) {
//   let contenedorCarrito = document.getElementById("contenedorCarrito")
//   const div = document.createElement("div")
//   contenedorCarrito.appendChild(div)

//   contenedorCarrito.innerHTML =
//     `      
//         <div class="modal-contenedor">
//         <div>
//         <img class="img-fluid img-carrito" src="${producto.img}"/>
//         </div>
//         <div>
//         <p>Producto: ${producto.nombre}</p>
//       <p>Precio: ${producto.precio}</p>
//       <p>Cantidad :${producto.cantidad}</p>
//       <button class="btn btn-danger"  onclick="eliminarProducto(${producto.id})">Eliminar producto</button>
//         </div>
//       </div>
//   `;
// }

// function mostrarProductosCarrito() {

//   carritoParseado.forEach(producto => {
//     console.log('prod carrito', producto)
//     mostrarCarrito(producto);
//   })
// }




const localStorageCarrito = localStorage.getItem('guardarCarrito')
const carritoParseado = JSON.parse(localStorageCarrito);
const botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

const mostrarCarrito = (producto) => {
  const carritoLista = document.querySelector('#carritoLista tbody')
  console.log(carritoLista);
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
  carritoParseado.forEach(producto => {
    mostrarCarrito(producto);
  })
}
mostrarProductosCarrito()

botonFinalizarCompra.addEventListener("click", () => {

  const spinnerCarrito = document.querySelector("#spinner")
  spinnerCarrito.classList.add("d-flex")
  spinnerCarrito.classList.remove("d-none")

  setTimeout(() => {
    spinnerCarrito.classList.remove("d-flex")
    spinnerCarrito.classList.add("d-none")
  }, 1500)

function sweetAlert(){
  Swal.fire({
    title: "¡Gracias por su compra!",
    text: "Vuelva pronto",
    icon: "success",
    confirmButtonText: "Aceptar",
  })
}


  setTimeout(sweetAlert, 1500)


})

