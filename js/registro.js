let nombre = []
let email = []
let contrasena = []

function nuevoUsuario() {
    let nuevoNombre = document.getElementById('nombre').value
    let nuevoEmail = document.getElementById('email').value
    let nuevaContrasena = document.getElementById('contrasena').value

    nombre = nombre.concat(nuevoNombre)
    email = email.concat(nuevoEmail)
    contrasena = contrasena.concat(nuevaContrasena)


    console.log(nombre)
    console.log(email)
    console.log(contrasena)

    // guardar registro en localStoreage
    localStorage.setItem('nombreUsuario', nombre)
    localStorage.setItem('emailUsuario', email)
    localStorage.setItem('contrasenaUsuario', contrasena)
}