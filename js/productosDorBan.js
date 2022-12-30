
let productosStore = []


// HTML
function monstrarProductos() {
  productosStore.forEach(producto => {
    const artiulos =`<div
          class="card col-6 col-lg-12 rounded-start"
          style="width: 30rem"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="${producto.img}"
            class="card-img-top"
            alt="accesorio"
          />
          <div class="card-body">
            <h5 class="card-title">Descripción</h5>
            <h2>${producto.nombre}</h2>
            <p class="card-text">${producto.descripcion}</p>
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">$${producto.precio}</li>
            <li class="list-group-item">
              <label for="number" class="livCant">Cantidad:</label>
              <input type="number" name="number" min="1" max="100" id="${producto.id}"/>
            </li>
            <li class="list-group-item">
              <label for="submit"></label>
              <input type="submit" value="Agregar" class="livAgregar" onclick="agregarAlCarrito(${producto.id})" />
            </li>
          </ul>
        </div>`
    if (document.getElementById('sectionDor')) {
      document.getElementById('sectionDor').innerHTML += artiulos
    }
  })
}

let carrito = []

function agregarAlCarrito(id) {

  let producto = productosStore.find(producto => producto.id === id)
  let cantidadProductoSeleccionado = document.getElementById(producto.id).value
  producto.cantidad = cantidadProductoSeleccionado;
  carrito = [...carrito, producto]


  modalCarrito()


}

 // Traer los productos
 fetch("../prodDorBanio.json")
 .then(response => response.json())
 .then(data => {
   productosStore=data
   // Mostrar en HTML
   monstrarProductos();
 });