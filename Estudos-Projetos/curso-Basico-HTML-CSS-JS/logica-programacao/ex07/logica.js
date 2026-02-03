// var usuario = Number(prompt("digite um número."));

// tabuada de multiplicação + multiplo de 10

// for(var i = 1; i <= 100; i++){
//   if(usuario * i % 10 === 0 ){
//     console.log(`Multiplo de 10 -> ${usuario} x ${i} = ${usuario * i}`);
//   } else {
//   console.log(`${usuario} x ${i} = ${usuario * i}`);
// }}

// ========================================================

// anos bissextos de 1004 a 2017
var ano = 1004;
while(ano <= 2017){
  if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){ 
  document.write(ano + "<br>");
  }
  ano += 4;
}