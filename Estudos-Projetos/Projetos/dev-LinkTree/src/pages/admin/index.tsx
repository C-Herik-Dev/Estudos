import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { useState, type FormEvent } from 'react'
import { FiTrash } from 'react-icons/fi'
import { db } from '../../services/firebaseConnection'
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore'

export function Admin() {
  const [nameInput, setNameInput ] = useState('')
  const [urlInput, setUrlInput] = useState('')
  const [textColorInput, setTextColorInput] = useState('#f1f1f1')
  const [backgroundColorInput, setBackgroundColorInput] = useState('#121212')

  function handleRegister(e: FormEvent){
    e.preventDefault();

    if(nameInput === "" || urlInput === ""){
      alert("Preencha todos os campos!")
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date()
    })
    .then(() => {
      setNameInput("")
      setUrlInput("")
      console.log("Cadastrado com sucesso!")
    })
    .catch((error) => {
      console.log("Erro ao cadastrar no banco!" + error)
    })
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header/>

      <form className='flex flex-col mt-8 mb-3 w-full max-w-xl' onSubmit={handleRegister}>
        <label className='text-white font-medium mt-2 mb-2'>Nome do link</label>
          <Input
          placeholder='Digite o nome do link...'
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          />

          <label className='text-white font-medium mt-2 mb-2'>Url do link</label>
          <Input
          type='url'
          placeholder='Digite a url...'
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          />

          <section className='flex my-4 gap-5'>
            <div className='flex gap-2'>
              <label className='text-white font-medium mt-2 mb-2'>Cor do link</label>
              <input
              type='color'
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
              />
              <div className='flex gap-2'>
                <label className='text-white font-medium mt-2 mb-2'>Fundo do link</label>
              <input
              type='color'
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
              />
              </div>
            </div>
          </section>

          {nameInput !== '' && (
            <div className='flex flex-col items-center justify-center mb-7 p-1 border-gray-100/25 border rounded-md'>
            <label className='text-white font-medium mt-2 mb-2'>Veja como esta ficando:</label>
            <article
            className='w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3'
            style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput}}
            >
              <p style={{ color: textColorInput}}>{nameInput}</p>
            </article>
          </div>
          )}

          <button className='flex justify-center items-center text-white bg-blue-600 font-medium rounded-md gap-4 h-9 mb-7 cursor-pointer'
          type='submit'
          >
            Cadastrar
          </button>
      </form>

      <h2 className='font-bold text-white mb-4 text-2xl'>
        Meus links
      </h2>

      <article className='flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none'
      style={{backgroundColor: "#2563eb", color: "#fff"}}
      >
        <p>{urlInput}</p>
        <div>
          <button
          className='border border-dashed py-1 rounded bg-neutral-900 cursor-pointer'
          >
            <FiTrash size={18} color="#fff"/>
          </button>
        </div>
      </article>

    </div>
  )
}