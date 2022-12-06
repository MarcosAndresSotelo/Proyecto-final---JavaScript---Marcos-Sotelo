// const localStorageCarrito = localStorage.getItem('carrito')
// const carritoParseado = JSON.parse(localStorageCarrito);
// const botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

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

// botonFinalizarCompra.addEventListener("click", () => {
//   Swal.fire(
//     'Gracias por su compra!',
//     'Vuela pronto!',
//     'success'
//   )
// })



const localStorageCarrito = localStorage.getItem('guardarCarrito')
const carritoParseado = JSON.parse(localStorageCarrito);

const mostrarCarrito = () => {
  const carritoLista = document.querySelector('#carritoLista tbody')
  carrito.forEach((producto) => {
    const { id, nombre, precio, descripcion, cantidad, img } = producto
    const row = document.createElement("row")
    carritoLista.appendChild(row);
    row.innerHTML += `
    <div class="modal-contenedor">
    <div>
    <img class="img-fluid img-carrito" src="${img}"/>
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
  
  function mostrarProductosCarrito() {
    carritoParseado.forEach(producto => {
      mostrarCarrito(producto);
    })
  }
  mostrarProductosCarrito()
  
}

