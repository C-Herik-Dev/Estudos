import { useState } from 'react'

interface InfoAlunoProps {
  nome: string;
  idade: string | number;
}

export default function App() { // App é o componente principal da aplicação
  const [input, setInput] = useState("")
  //const [aluno, setAluno] = useState("")
  const [idade, setIdade] = useState("")
  //const [idadeAluno, setIdadeAluno] = useState("")
  //const [aluno, setAluno] = useState<string | number etc...>("")
  //input = valor que está armazenado no estado
  //setInput = seta um novo valor para o estado
  const [contador, setContador] = useState(0)
  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()
  function mostrarAluno() {
    setInfoAluno({
      nome: input,
      idade: idade,
    })
  }
  function adicionar() {
    setContador(valorAtual => valorAtual + 1)
  }

  function diminuir() {
    if(contador === 0){
      return; 
    }
    setContador(valorAtual => valorAtual - 1)
  }

  return (
    <div>
      <h1>Sobre useState</h1>
      <input
        placeholder="Digite seu nome"
        value={input} // value = valor que está armazenado no estado
        onChange={(e) => setInput(e.target.value)} // e = evento que está acontecendo no input, onChange = toda vez que eu digitar algo no input, ele vai disparar esse evento
      />
      <br /> <br />
      <input
        placeholder="digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <br /><br />
      <button onClick={mostrarAluno}>Mostar nome do Aluno</button>
      <hr />

      <h3>
        {infoAluno?.nome && `Bem vindo, ${infoAluno?.nome}!`}
      </h3>
      <h3>
        {infoAluno?.idade && `Idade: ${infoAluno?.idade}`}
      </h3>
      <hr /><br />
      <button onClick={adicionar}> + </button> 
        {contador} 
      <button onClick={diminuir}> - </button>
    </div>
    // >>infoAluno?- "?" serve para se não tiver nada mostrara vazio<<
    // h3 -> O h3 é uma condicional, como o "aluno" começa vazio pelo useState(""), ele é false, então nada é exibido. Quando o usuário digita o nome e clica no botão, o "aluno" recebe o valor do "input" através da função mostrarAluno(), tornando-se true. Assim, a mensagem de boas-vindas é exibida com o nome do aluno. {aluno-> valor false ou true; && -> operador lógico "E"; `Bem vindo, ${aluno}!` -> template string que exibe a mensagem de boas-vindas com o nome do aluno.
  )
}