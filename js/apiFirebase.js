import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAJxcRIqzDa_pFbXNE1BzcWoo0inMhctCQ",
  authDomain: "usuarios-50ba0.firebaseapp.com",
  projectId: "usuarios-50ba0",
  storageBucket: "usuarios-50ba0.appspot.com",
  messagingSenderId: "643929834736",
  appId: "1:643929834736:web:f2da9948dbf8f37c40ee35",
  measurementId: "G-PTFW54C6J8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const subirDatos = async(user) => {
  const {Nombre, Cedula, Correo, Contraseña, Apellido} = user;
  try {
    const docRef = await addDoc(collection(db, "users"), {
      Cedula, Nombre, Apellido, Correo, Contraseña
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const obtenerDatos = async() =>{
  var lista = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());

    var id = doc.id;
    var nombre = doc.Nombre;
    var apellido = doc.Apellido;
    var cedula = doc.Cedula;
    var correo = doc.Correo;
    var password = doc.Contraseña;

    var user = {
      id, nombre, apellido, cedula, correo, password
    };

    lista.push(user);
  });

  return lista;
}

const eliminarDato = async(documentID) => {
  await deleteDoc(doc(db, "users", documentID));
}

const actualizarDato = async(user, documentID) => {
  const {Nombre, Cedula, Correo, Contraseña, Apellido} = user;
  await setDoc(doc(db, "users", documentID), {
    Cedula, Nombre, Apellido, Correo, Contraseña
  });
}



// function enviarUsuario(){
//   var Nombre = document.getElementById("name").value;
//   var Apellido = document.getElementById("apellido").value;
//   var Cedula = document.getElementById("cedula").value;
//   var Correo = document.getElementById("correo").value;
//   var Contraseña = document.getElementById("contraseña").value;

//   const user = {
//       Cedula, Nombre, Apellido, Correo, Contraseña
//   }

//   subirDatos(user);
// }

// function modificarUsuario(documentID){
//   var Nombre = document.getElementById("name").value;
//   var Apellido = document.getElementById("apellido").value;
//   var Cedula = document.getElementById("cedula").value;
//   var Correo = document.getElementById("correo").value;
//   var Contraseña = document.getElementById("contraseña").value;

//   const user = {
//     Cedula, Nombre, Apellido, Correo, Contraseña
//   }

//   actualizarDato(user, documentID);
// }

// document.getElementById("añadir").addEventListener("click", (e)=>{
//   e.preventDefault()
//   enviarUsuario()
// })

// document.getElementById("eliminar").addEventListener("click", (e)=>{
//   e.preventDefault()
//   eliminarDato("Fz9H1KoQisViCqHxLDux")
// })

// document.getElementById("modificar").addEventListener("click", (e)=>{
//   e.preventDefault()
//   modificarUsuario("8Lqw4E2GqGVSJXV4usTl")
// })


  
  



