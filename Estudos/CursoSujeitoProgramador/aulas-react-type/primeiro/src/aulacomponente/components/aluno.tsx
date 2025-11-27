

interface AlunoProps {
  nome: string;
  idade?: number; // Propriedade opcional
}

export function Aluno({ nome, idade }: AlunoProps) { // Componente Aluno componente = é uma função que retorna um pedaço de interface
  return(
    <div>
      <h1>Aluno: { nome }</h1>
      <h2>Idade: { idade }</h2>
    </div>
  )
}