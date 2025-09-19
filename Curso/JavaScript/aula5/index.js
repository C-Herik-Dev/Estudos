// Tipos de dados primitivos : string, number, boolean, undefined, null e *symbol*(Avançado).

const nome = 'Carlos'; // string
const sobreNome = "Linhares"; // string
const UltimoNome = `Silva`; // string

const idade = 30; // number
const altura = 1.64; // number

let nomeAluno; // undefined --> não aponta para nenhum local na memória e não tem valor definido.
const sobrenomeAluno = null; // nulo --> não aponta para nenhum local na memória.
const boolean = true; // -> (Valor lógico), somente duas opções: true ou false.
const aprovado = false;

let a = 2;
let b = a;
console.log(a, b); // 2 2

a = 3;
console.log(a, b); // 3 2
