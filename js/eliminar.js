import { eliminarDato, obtenerDatos } from "./apiFirebase.js";

function eliminarUsuario(){
    const list = document.getElementById("lista");
    eliminarDato(list.value);
    alert("Usuario Eliminado")
}

function showList(result) {
  result.forEach(user => {
    document.getElementById("lista").innerHTML += "<option value='" + user.id + "'>" + user.nombre + "</option>"
  });
}

const promise = obtenerDatos();
promise.then(showList);

document.getElementById("eliminar").addEventListener("click", (e)=>{
    e.preventDefault();
    eliminarUsuario();
})
