// afirmando algum tipo

let statusAtual: unknown = 1;
let mudaStatus: number = 0;
// Estou afirmando que o tipo de statusAtual é um number
mudaStatus = statusAtual as number;

mudaStatus = <number>statusAtual;

console.log(mudaStatus);

