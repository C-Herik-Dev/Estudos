var n1 = Number(prompt("Digite o primeiro número:"));
var n2 = Number(prompt("Digite o segundo número:"));

/*
  Operadores de comparação: Boolean => "true ou false"
 == igaualdade de valor
 === igualdade de valor e tipo
 != diferente de valor
  !== diferente de valor ou tipo
  > maior que
  < menor que
  >= maior ou igual a
  <= menor ou igual a
 */

var operacao = n1 + n2 / 2;
// alert(operacao > 5) = true ou false
alert(`a media é: ${operacao}`)
alert(`A media é maior que 5? ${operacao > 5}`)