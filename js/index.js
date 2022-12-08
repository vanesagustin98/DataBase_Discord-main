import { subirDatos } from "./apiFirebase.js";

function enviarUsuario(){
    var Nombre = document.getElementById("name").value;
    var Apellido = document.getElementById("apellido").value;
    var Cedula = document.getElementById("cedula").value;
    var Correo = document.getElementById("correo").value;
    var Contraseña = document.getElementById("contraseña").value;
  
    const user = {
        Cedula, Nombre, Apellido, Correo, Contraseña
    }
  
    subirDatos(user);
    alert("Usuario Registrado")
}

document.getElementById("añadir").addEventListener("click", (e)=>{
    e.preventDefault();
    enviarUsuario();
})

