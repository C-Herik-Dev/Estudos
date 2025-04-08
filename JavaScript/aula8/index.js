// Mais sobre strings
// let umaString = "um \"texto\""; // '\' => carácter de escape

//               01234567
// let umaString = "um texto";
// console.log(umaString[1]);

// let umaString = "um texto";
// console.log(umaString.charAt(7));

// let umaString = "um texto";
// console.log(umaString.concat(' ', 'outro texto'));
// console.log(umaString + ' outro texto');
// console.log(`${umaString} outro texto`); // Template String

/*
let umaString = "um texto";
console.log(umaString.indexOf('texto')); // da esquerda para a direita
console.log(umaString.lastIndexOf('texto')); // da direita para a esquerda
console.log(umaString.match(/[a-z]/g)); // expressões regulares
console.log(umaString.search(/x/)); // retorna o índice
console.log(umaString.replace('um', 'outro')); // substitui a primeira ocorrência
console.log(umaString.replace(/um/, 'outro')); 
*/

let umaString = "O rato roeu a roupa do rei de roma.";
//console.log(umaString.replace(/r/g, '#')); // substitui todas as ocorrências

// console.log(umaString.length); // tamanho da string
// console.log(umaString.slice(2, 5)); // fatia a string

//console.log(umaString.length - 3);
//console.log(umaString.slice(-3)); // fatia a string do final para o início
//console.log(umaString.slice(32));

// console.log(umaString.slice(-5, umaString.length - 1));
// console.log(umaString.slice(-5, - 1));

console.log(umaString.toUpperCase()); // transforma em maiúsculas
console.log(umaString.toLowerCase()); // transforma em minúsculas