var nota1 = Number(prompt("digite um número"));
var nota2 = Number(prompt("digite um número"));
media = (nota1 + nota2) / 2;

if(nota1 > 0 && nota2 > 0 && media > 5){
    alert("Parabens, você foi aprovado!");
}else{
    alert("Infelizmente você não foi aprovado.");
}

// ========================================================

if(nota1 === 0 || nota2 === 0 || media <= 5){
  alert("Infelizmente você não foi aprovado.");
}else{
  lert("Parabens, você foi aprovado!");
}

// ========================================================

