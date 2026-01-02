import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo-projeto.png'

function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: 'Motivacional',
      frases: [
        'Acredite em si mesmo e todo o resto virá naturalmente.',
        'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
        'Não espere por oportunidades, crie-as.',
        'A única maneira de fazer um excelente trabalho é amar o que você faz.'
      ]
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        'Bom dia! Que seu dia seja repleto de alegria e realizações.',
        'Acorde com gratidão e veja como o dia se transforma em algo especial. Bom dia!',
        'Cada novo dia é uma nova oportunidade para ser feliz. Tenha um ótimo dia!',
        'Que seu dia comece com um sorriso e termine com muitas conquistas. Bom dia!'
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function handleGenerateFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`" ${allFrases[categoriaSelecionada].frases[numeroAleatorio]} "`)
  }
  return (
    <div className='container'>
      <img 
        src={logoImg} 
        alt="logo-frases" 
        className='logo'
      />
      <h1 className='title'>Categorias</h1>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button 
          key={item.id}
          className='category-button'
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: '#1fa4db'
          }}

          onClick= {() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
        
      </section>

      <button 
      className='button-frase'
      onClick={handleGenerateFrase}
      >
        Gerar frase
      </button>
      
      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}

    </div>
  )
}

export default App
