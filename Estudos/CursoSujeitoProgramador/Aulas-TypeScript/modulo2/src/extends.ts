
interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataformas: string[];
}

const left4dead: JogoProps = {
  id: "13542",
  nome: "left 4 dead",
  descricao: "Jogo de ação e tiro em primeira pessoa",
  plataformas: ["PS5", "PC"]
}

//console.log(left4dead);

interface DLC extends JogoProps {
  jogoOriginal: JogoProps;
  novoConteudo: string[];
}

const left4deadDLC: DLC = {
  id: "13542-DLC1",
  nome: "left 4 dead - DLC edition",
  descricao: "Jogo de ação e tiro em primeira pessoa e novos conteúdos",
  plataformas: ["PC"],
  novoConteudo: ["Novas armas", "Novos mapas", "novos personagens", "Modo Coop"],
  jogoOriginal: left4dead
}

console.log(left4deadDLC)