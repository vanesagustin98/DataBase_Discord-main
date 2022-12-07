import "./apiFirebase.js";

function enviarUsuario(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("apellido").value;
    var cedula = document.getElementById("cedula").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;

    const user = {
        cedula, nombre, apellido, correo, contraseña
    }

    var api = require("./apiFirebase.js")
    api.subirDatos(user)   
}

