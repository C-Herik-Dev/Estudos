import { useContext } from 'react'
import { UserContext } from '../../contexts/user'


export function Footer(){
  const {qtdAlunos, newAluno} = useContext(UserContext)
  return (
    <footer>
      <hr />
      <br />
      <h6>Footer</h6>
      <h4>Alunos online na plataforma: {qtdAlunos}</h4>
      <button onClick={ () => newAluno()}>
        novo aluno
      </button>
    </footer>
  )
}