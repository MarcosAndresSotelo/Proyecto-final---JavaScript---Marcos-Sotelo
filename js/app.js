
// Expresiones regulares
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

// REGISTRO DE USUARIO
let botonEnviar = document.getElementById('botonEnviar')
let nombre = []
let email = []
let contrasena = []

function checklong(texto) {
  return texto.length > 3 && texto.length < 15
}

function nuevoUsuario() {

  let nuevoNombre = document.getElementById('nombre').value
  let nuevoEmail = document.getElementById('email').value
  let nuevaContrasena = document.getElementById('contrasena').value


  if (nuevoEmail.match(emailRegex) && checklong(nuevoNombre) && checklong(nuevaContrasena)) {
    nombre = nombre.concat(nuevoNombre)
    email = email.concat(nuevoEmail)
    contrasena = contrasena.concat(nuevaContrasena)
    localStorage.setItem('nombreUsuario', nombre)
    localStorage.setItem('emailUsuario', email)
    localStorage.setItem('contrasenaUsuario', contrasena)

  } else {
    Swal.fire('Se registro correctamente')

  }

nuevoUsuario()


 nombre = nombre.concat(nuevoNombre)
 email = email.concat(nuevoEmail)
 contrasena = contrasena.concat(nuevaContrasena)


  // guardar registro en localStoreage
 localStorage.setItem('nombreUsuario', nombre)
 localStorage.setItem('emailUsuario', email)
 localStorage.setItem('contrasenaUsuario', contrasena)
}


