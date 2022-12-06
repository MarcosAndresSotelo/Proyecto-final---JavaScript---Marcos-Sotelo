
// Traer los productos
function getProductos() {
    const API_URL = "http://localhost:3000/productosLivingComedor"
    return fetch(API_URL).then(response => response.json())
}

// HTML
let productosStore = []
async function monstrarProductos() {
    await getProductos().then(productos => { productosStore = productos });
    productosStore.forEach(producto => {
        const artiulos = `<div
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
              <input type="number" name="number" id="${producto.id}"/>
            </li>
            <li class="list-group-item">
              <label for="submit"></label>
              <input type="submit" value="Agregar" class="livAgregar" onclick="agregarAlCarrito(${producto.id})" />
            </li>
          </ul>
        </div>`
        if (document.getElementById('sectionLiv')) {
            document.getElementById('sectionLiv').innerHTML += artiulos
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

    console.log(carrito)

    localStorage.setItem('carrito', JSON.stringify(carrito))

}

// Mostrar en HTML
monstrarProductos();