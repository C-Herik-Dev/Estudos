import { Header } from "./components/header";
import { Aluno } from "./components/aluno";

export default function App() { // App é o componente principal da aplicação
  return(
    <div>
      <Header title="Curso ReactJS + TypeScript"/>

      <Aluno nome ="Carlos Herik" idade={30}/>
      <Aluno nome ="Maria Silva"/>
      <Aluno nome ="João Pedro" idade={18}/>
    </div>
  )
}

