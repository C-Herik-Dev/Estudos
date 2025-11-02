
interface TecnologiaProps {
  id: string;
  nome: string;
  descricao?: string;
}

interface ArrayTecnologia{
  tecnologia: TecnologiaProps[];
}

let frontEnd: ArrayTecnologia = {
  tecnologia: [
    {id: "1", nome: "HTML", descricao: "Linguagem de marcação para estruturar o conteúdo na web."},
    {id: "2", nome: "CSS"},
    {id: "3", nome: "JavaScript", descricao: "Linguagem de programação para adicionar interatividade às páginas web."},
  ]
}

console.log(frontEnd);