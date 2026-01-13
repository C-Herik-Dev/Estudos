// REST Operator
/*
function convidados(...nomes){
  console.log("Sejam bem vindos todos convidados");
  console.log(nomes);
}

convidados("Matheus", "Carlos", "Lucas")
*/

function sorteador(...numeros){
  console.log(numeros);

  const numeroGerado = Math.floor(Math.random() * numeros.length);
  console.log("O numero gerado foi: " + numeros[numeroGerado]);
}

sorteador(1, 4, 6, 15, 27, 60, 77, 88, 90)