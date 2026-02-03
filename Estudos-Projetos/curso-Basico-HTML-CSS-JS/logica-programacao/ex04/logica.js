var jogador1 = Number(prompt("Jogador 1, digite um número"));
var jogador2 = Number(prompt("Jogador 2, digite um número"));

if (jogador1 === jogador2) {
  alert("Empate!");
}else{
  var numSorteado = Math.floor(Math.random() * 2);
  alert(`Número sorteado: ${numSorteado}`);
}if(numSorteado === 0){
  jogador1 < jogador2
    ? alert("Jogador 1 venceu!")
    : alert("Jogador 2 venceu!");
}else if(numSorteado === 1){
  jogador1 > jogador2
    ? alert("Jogador 1 venceu!")
    : alert("Jogador 2 venceu!");
}