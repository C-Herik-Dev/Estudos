/*
Primitivos (Imutáveis) - string, number, boolean, null, undefined, (symbol, bigint) - Valor
*/
/*
// Exemplo de string (imutável)
//          012345
let nome = "Lucas";
nome[0] = "H";
console.log(nome[0], nome); // Lucas (não altera o valor original)

let a = "A";
let b = a; // copia o valor de a
console.log(a, b); // A A

a = 'haha';
console.log(a, b); // outra coisa A (a foi alterado, b permanece o mesmo)
*/

/*
Referência (Mutáveis) - array, object, function - Endereço na memória
 */

let a = [1, 2, 3];
let b = a; // copia a referência de a
console.log(a, b);

a.push(4); // adiciona 4 ao array a
console.log(a, b);

b.pop();
console.log(a, b); // remove o último elemento do array b (que é o mesmo que a)
// a e b são o mesmo array, então a alteração em um afeta o outro