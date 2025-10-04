// FIND

let listagem = [5, 3, "Jose", 2, "Matheus", "Jose"]

let busca = listagem.find((item)=>{
  return item === "Jose";
})

console.log(busca);
console.log("--------------");

//FILTER

let palavras = ["Matheus", "Carlos", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador", "Jose"];

let resultado = palavras.filter((item)=>{
  return item.length <= 4;
})

console.log(resultado);