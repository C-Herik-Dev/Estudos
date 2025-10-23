/*
if -> pode ser usado sozinho
Sempre que usar a palavra 'else', deve-se usar o if antes ex: if{} else
else if -> pode ser usado para criar múltiplas condições (pode ter vários else if)
else -> so posso ter um else por bloco de código
podemos usar condições sem else if, utilizando apenas if e else
*/

const hora = 0;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite!");
} else {
  console.log("Olá!");
}


const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log("Número está entre 0 e 5");
} else {
  console.log("Número não está entre 0 e 5");
}