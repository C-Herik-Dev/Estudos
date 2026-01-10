import { useEffect, useState, type FormEvent } from 'react'
import { Header } from "../../components/header";
import { Input } from "../../components/input"

import { db } from '../../services/firebaseConnection'
import {
  setDoc,
  doc,
  getDoc
} from 'firebase/firestore'

interface LinkProps{
  id: string,
  name: string,
  url: string,
  bg: string,
  color: string;
}


export function Networks() {
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [youtube, setYoutube] = useState('')

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link")
      getDoc(docRef)
      .then( (snapshot) => {
        if(snapshot.data() !== undefined){
          setFacebook(snapshot.data()?.facebook)
          setInstagram(snapshot.data()?.instagram)
          setYoutube(snapshot.data()?.youtube)
        }
      })
    }
    loadLinks();
  }, [])

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
    .then(() => {
      console.log("Cadastro com sucesso!")
    })
    .catch((error) => {
      console.log("erro ao salvar" + error)
    })

  }

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header/>
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">Link do Facebook</label>
        <Input
        type="url"
        placeholder="Digite a url do facebook..."
        value={facebook}
        onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
        <Input
        type="url"
        placeholder="Digite a url do instagram..."
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">Link do Youtube</label>
        <Input
        type="url"
        placeholder="Digite a url do youtube..."
        value={youtube}
        onChange={(e) => setYoutube(e.target.value)}
        />

        <button
        type='submit'
        className="text-white bg-blue-600 h-9 rounded-md itemns-center justify-center flex mb-7"
        >
          salvar links
        </button>
      </form>
    </div>
  )
}