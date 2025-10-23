import { useState, useEffect } from 'react'
import { db } from './firebaseConnecttion.js';
import { doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore'

import './app.css'



function App() {
const [titulo, setTitulo] = useState('');
const [autor, setAutor] = useState('');

  async function handleAdd() {
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    // .then(() =>[
    //   console.log("DADOS REGISTRADOS NO BANCO!")
    // ])
    // .catch((error) => {
    //   console.log("GEROU ERRO" + error)
    // })


    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() =>{
      console.log("DADOS REGISTRADOS NO BANCO!")
      setAutor('')
      setTitulo('')
  })
    .catch((error) => {
      console.log("GEROU ERRO" + error)
    })

}

async function buscarPost() {
  const postRef = doc(db, "posts", "12345")

  await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    })
    .catch(() =>{
      console.log("Erro ao Buscar")
    })
}

  return (
    <div className="App">
      <h1>ReactJS + FireBase :) </h1>

      <div className='container'>
        <label>Titulo:</label>
        <textarea type="text"
        placeholder="Digite o titulo"
        value={titulo}
        onChange={ (e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input type="text"
        placeholder="Autor do post"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar Post</button>
      </div>
    </div>
  );
}

export default App;
