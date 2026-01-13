// Arrays são objetos especiais, que podem ser manipulados de várias formas.
// Os arrays são objetos que podem conter qualquer tipo de dado, incluindo outros arrays.
//                   0       1        2
//const alunos = ['Luiz', 'Maria', 'João'];
//console.log(alunos);
//console.log(alunos[0]); // Luiz [1] Maria [2] João
// alunos[0] = 'Herik';
// // alunos[3] = 'Ana';
// alunos[alunos.length] = 'Ana'; // Adiciona Ana na última posição do array
// alunos[alunos.length] = 'Carlos';
// alunos[alunos.length] = 'Herik'; 
// alunos.push('Fábio'); // Adiciona Fábio na última posição do array
// alunos.unshift('Maria'); // Adiciona primeira posição do array
// alunos.pop(); // Remove o último elemento do array
// const removido = alunos.pop(); // Remove o último elemento do array e retorna o valor removido
// const removido = alunos.shift(); // Remove o primeiro elemento do array e retorna o valor removido
// console.log(removido);
// console.log(alunos);

// const alunos = ['Luiz', 'Maria', 'João'];
let alunos = ['Luiz', 'Maria', 'João'];
alunos = 123;

console.log(typeof alunos); // object
console.log(alunos instanceof Array); // true or false

// alunos.push('Fábio');
// alunos.push('Carlos');

// console.log(alunos.slice(0, 3)); // Retorna os três primeiros elementos do array
// console.log(alunos.slice(0, -2)); // Retorna os dois últimos elementos do array
// console.log(alunos.slice(0, 5));
