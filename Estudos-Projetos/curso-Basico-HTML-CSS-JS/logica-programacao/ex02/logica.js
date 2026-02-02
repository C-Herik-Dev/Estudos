var n1 = Number(prompt("Digite o primeiro número:"));
var n2 = Number(prompt("Digite o segundo número:"));

/**
 Operadores matemáticos:
+ soma
- subtração
* multiplicação
/ divisão
% resto da divisão => usado para saber se um número é par( '0' ) ou ímpar.
** potenciação
 */


var resultRest = n1 % n2;
var resultPot = n1 ** n2;

// () => prioridade para operações matemáticas 
var resultMedia = (n1 + n2) / 2;


var resultMedia = alert(`A média entre ${n1} e ${n2} é: ${resultMedia}`);
var result1 = alert(`O numero ${n1} elevado a ${n2} é: ${resultPot}`);
var result2 = alert(`O resto da divisão de ${n1} por ${n2} é: ${resultRest}`);