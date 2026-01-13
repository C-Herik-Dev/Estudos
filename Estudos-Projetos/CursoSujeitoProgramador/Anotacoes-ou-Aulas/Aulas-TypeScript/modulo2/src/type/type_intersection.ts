
// type Alias conseguimos criar tipos mais poderosos e reutilizáveis, com mais informações sobre o que aquele tipo representa, e mais do que os tipos primitivos

type Info ={
  id: number;
  nome: string;
  descricao?: string;
}

const produtoInfo: Info = {
  id: 1,
  nome: "GTX 4090",
  //descricao: "Placa de vídeo top de linha da NVIDIA"
}

type Categoria = {
  slug: string;
  quantidade: number;
}

const categoria1: Categoria = {
  slug: "hardware",
  quantidade: 100
}

// Intersection Types (Tipos de Interseção) - Unir dois tipos em um só

type produtoInfo = Info & Categoria; // -> produtoInfo agora tem todas as propriedades de Info e Categoria

const novoProduto: produtoInfo = {
  id: 13542,
  nome: "Ryzen 9 7950X",
  //descricao: "Processador top de linha da AMD",
  slug: "hardware",
  quantidade: 50
}

console.log(novoProduto);