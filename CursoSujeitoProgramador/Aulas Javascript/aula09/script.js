// Descronstruindo Arrays e Objetos
// Objeto
let pessoa = {
  nome: "Carlos",
  sobrenome: "Silva",
  empresa: "Sujeito Programador",
  cargo: "Programador FullStack"
};

/*
console.log(pessoa.nome);
console.log(pessoa.cargo);
*/
//renomear varia

let nome = "teste";

//renomeando apenas a desconstrução
const {nome:nomePessoa, sobrenome, empresa, cargo} = pessoa;

//não preciso escrever "pessoa.nome, pessoa.alguma coisa" praticidade!
console.log(nomePessoa);
console.log(cargo);

console.log("---------------");

//Arrays

let nomes = ["Matheus", "Lucas", "Carlos"];
//console.log(nomes[2]);
//Primeira maneira de desconstruir arrys
const {2:Carlos} = nomes;
console.log(Carlos);

//Segunda maneira de desconstruir arrys

const [primeironome, segundonome, terceironome] = nomes;
console.log(terceironome);