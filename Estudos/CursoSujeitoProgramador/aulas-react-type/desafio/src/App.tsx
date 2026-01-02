import { useState } from 'react'
import './App.css'

function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [nome, setNome] = useState('')
  const [anoNascimento, setAnoNascimento] = useState('')


  function calc (anoNascimento: number) {
    const anoAtual = new Date().getFullYear()
    const idade = anoAtual - anoNascimento
    setTextoFrase(`${nome} sua idade é: ${idade} anos`)
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    calc(Number(anoNascimento))
    setNome('')
    setAnoNascimento('')
  }

  function handleNomeChange(valor: string) {
  const formatado =
    valor.charAt(0).toUpperCase() + valor.slice(1)

  setNome(formatado)
}

  return (
    <div className='container'>
      <h1 className='title'>Descubra sua idade</h1>

      <form className='form' onSubmit={handleSubmit}>
        <label>Qual é o seu nome?</label>
        <input 
        type="text"
        placeholder="Digite seu nome..."
        value={nome}
        onChange={(e) => handleNomeChange(e.target.value)}
        />

        <label>Digite seu ano de nascimento:</label>
        <input 
        type="number"
        placeholder="Ano de nascimento..." 
        value={anoNascimento}
        onChange={(e) => setAnoNascimento(e.target.value)}
        />
        <button>Calcular Idade</button>
      </form>

      {textoFrase !== '' && <p className='result'>{textoFrase}</p>}
    </div>
  )
}

export default App
