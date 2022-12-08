import { actualizarDato, obtenerDatos, obtenerUser } from "./apiFirebase.js";

function modificarUsuario(){
  var Nombre = document.getElementById("name").value;
  var Apellido = document.getElementById("apellido").value;
  var Cedula = document.getElementById("cedula").value;
  var Correo = document.getElementById("correo").value;
  var Contraseña = document.getElementById("contraseña").value;
  const list = document.getElementById("lista");

  const user = {
    Cedula, Nombre, Apellido, Correo, Contraseña
  }

  actualizarDato(user, list.value);
  alert("Usuario Modificado")
}

function showUser(result) {
  console.log(result);
  document.getElementById("name").value = result.Nombre;
  document.getElementById("apellido").value = result.Apellido;
  document.getElementById("cedula").value = result.Cedula;
  document.getElementById("correo").value = result.Correo;
  document.getElementById("contraseña").value = result.Contraseña;
}

function showList(result) {
  result.forEach(user => {
    document.getElementById("lista").innerHTML += "<option value='" + user.id + "'>" + user.nombre + "</option>"
  });
}

const promise = obtenerDatos();
promise.then(showList);



document.getElementById("modificar").addEventListener("click", (e)=>{
    e.preventDefault();
    modificarUsuario();
})

document.getElementById("lista").addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(e.target.value);
    const promise2 = obtenerUser(e.target.value);
    promise2.then(showUser);
})