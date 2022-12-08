import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// API


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


export const subirDatos = async(user) => {
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

// export async function obtenerDatos(){
//   const lista = [];
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     //console.log(doc.id, " => ", doc.data());

//     var id = doc.id;
//     var nombre = doc.data().Nombre;
//     var apellido = doc.data().Apellido;
//     var cedula = doc.data().Cedula;
//     var correo = doc.data().Correo;
//     var password = doc.data().Contraseña;

//     var user = {
//       id, nombre, apellido, cedula, correo, password
//     };

//     lista.push(user);
//   });

//   return lista;
// }

export const obtenerDatos = async() =>{
  const lista = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data());

    var id = doc.id;
    var nombre = doc.data().Nombre;
    var apellido = doc.data().Apellido;
    var cedula = doc.data().Cedula;
    var correo = doc.data().Correo;
    var password = doc.data().Contraseña;

    var user = {
      id, nombre, apellido, cedula, correo, password
    };

    lista.push(user);
  });

  return lista;
}

export const obtenerUser = async(id) =>{
  const querySnapshot = await getDoc(doc(db, "users", id));
  return querySnapshot.data();
}

export const eliminarDato = async(documentID) => {
  await deleteDoc(doc(db, "users", documentID));
}

export const actualizarDato = async(user, documentID) => {
  const {Nombre, Cedula, Correo, Contraseña, Apellido} = user;
  await setDoc(doc(db, "users", documentID), {
    Cedula, Nombre, Apellido, Correo, Contraseña
  });
}

// Metodos Intermedios



// function showList(result) {
//   result.forEach(user => {
//     document.getElementById("lista").innerHTML += "<option value='" + user.id + "'>" + user.nombre + "</option>"
//   });
// }

// function showUser(result) {
//   console.log(result);
//   document.getElementById("name").value = result.Nombre;
//   document.getElementById("apellido").value = result.Apellido;
//   document.getElementById("cedula").value = result.Cedula;
//   document.getElementById("correo").value = result.Correo;
//   document.getElementById("contraseña").value = result.Contraseña;
// }

// const promise = obtenerDatos();
// promise.then(showList);


// Enlace Botones

// document.getElementById("eliminar").addEventListener("click", (e)=>{
//   e.preventDefault();
//   eliminarDato("Fz9H1KoQisViCqHxLDux");
// })

// document.getElementById("modificar").addEventListener("click", (e)=>{
//   e.preventDefault();
//   modificarUsuario("8Lqw4E2GqGVSJXV4usTl");
// })

// document.getElementById("lista").addEventListener("click", (e)=>{
//   e.preventDefault();
//   const promise2 = obtenerUser(e.target.value);
//   promise2.then(showUser);
// })

// document.getElementById("lista").addEventListener("click", (e)=>{
//   e.preventDefault();
//   const promise2 = obtenerUser(e.target.value);
//   promise2.then(showUser);
// })

  
  



