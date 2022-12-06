function productos(img, nombre, descripcion, precio, cantidad, id) {
    this.img = img;
    this.nombre = nombre
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
    this.id = id
}

const producto1 = new productos(
    '../assets/img/livingcomedor/accesoriouno.jpg', 'Manopla', `Protege tus manos del calor mientras cocina con nuestro Set de Manopla. Se encuentra diseñado con un suave forro acolchado para su uso cómodo.`, 4500, 0, 1)
const producto2 = new productos(
    '../assets/img/livingcomedor/accesoriodos.jpg', 'Almohada', `Esta almohada es ideal para el apoyo de las diferentes zonas de la cabeza, hombres y cuello. Ofrece un soporte perfecto para todas las personas sin importar la posición en la que duermas.`, 4600, 0, 2)
const producto3 = new productos(
    '../assets/img/livingcomedor/manteluno.jpg', 'Mantel espampado', `Mantel rectangular estampado, compuesto por 100% poliéster. Estilo y diseño en tu mesa.`, 5200, 0, 3)
const producto4 = new productos(
    '../assets/img/livingcomedor/manteldos.jpg', 'Mantel liso', `Mantel rectangular liso, compuesto por puro algodón tusor. Estilo y diseño en tu mesa.`, 5500, 0, 4)
const producto5 = new productos(
    '../assets/img/livingcomedor/cortinauno.jpg', 'Cortina verde', `El black out textil es un tejido compuesto por 3 capas entrelazadas: una primera capa de tejido color, una capa de tejido negro en el medio y otra capa de tejido color en el reverso.`, 9500, 0, 5)
const producto6 = new productos(
    '../assets/img/livingcomedor/cortinados.jpg', 'Cortina roja', `El black out textil es un tejido compuesto por 3 capas entrelazadas: una primera capa de tejido color, una capa de tejido negro en el medio y otra capa de tejido color en el reverso.`, 10500, 0, 6)

let listaProductos = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
]

// HTML
function monstrarProductos() {
    listaProductos.forEach(producto => {
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

// GUARDAR PRODUCTOS EN LOCALSTORAGE
let carrito = []

function agregarAlCarrito(id) {

    let producto = listaProductos.find(producto => producto.id === id)
    let cantidadProductoSeleccionado = document.getElementById(producto.id)?.value || 1
    producto.cantidad = cantidadProductoSeleccionado;

    carrito.push(producto)

    localStorage.setItem('carrito', JSON.stringify(carrito))
}
monstrarProductos();