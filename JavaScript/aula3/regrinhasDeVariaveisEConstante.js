let nome; //declara a variável nome
nome = 'Herik'; //atribui o valor 'Herik' a variável nome
console.log(nome); //imprime o valor da variável nome no console
nome = 'Carlos';
console.log(nome);


// Não podemos criar variáveis com palavras reservadas do JavaScript

// let let;
// let if;
// let console;
//...

// Variáveis precisam ter nomes significativos
// let n = 'João'; -> não é uma boa prática
// console.log(n);
// let nomeCliente = 'João'; -> boa prática
// console.log(nomeCliente);

// Não podemos começar o nome de uma variável com números
// let 1nome = 'João'; => error. De preferência a começar com letra minúscula

// Não podemos usar espaços em branco ou caracteres especiais
// let nome cliente = 'João'; => error. De preferência a usar camelCase
// let nome-cliente = 'João';
// camelCase = Exatamente como se escreve Ex: nomeCliente

// Case-sensitive => JavaScript diferencia letras maiúsculas de minúsculas
let nomeCliente = 'João'; //camelCase
let nomecliente = 'Carlos'; //case-sensitive

console.log(nomeCliente, nomecliente);

// Não podemos reatribuir valores a uma variáveis
// NÃO UTILIZE VAR, UTILIZAR LET.