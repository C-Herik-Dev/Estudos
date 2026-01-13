// Spread Operator. -> ... (três pontos)

let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 6];
console.log(numeros);

console.log("------------");

let pessoa = {
  nome: "Carlos",
  idade: "30",
  cargo: "Programador"
}

let endereco = {
  ...pessoa,
  cidade: "Tabuleiro do Norte",
  telefone: "(88) 9999999999"
}
console.log(endereco);

console.log("-------------");

function novoUsuario(info){
  let dados = {
    ...info,
    status: "ATIVO",
    inicio: "20/10/2026",
    codigo: "135420"
  };

  console.log(dados);
}

novoUsuario({nome: "Carlos", sobrenome: "Silva", idade: "30", cargo: "DEV"})