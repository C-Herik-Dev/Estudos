//Desafio 1

function verificar(numero){
  if (numero > 0) {
    console.log("O numero é positivo");
  }else if (numero < 0){
    console.log("O numero é negativo")
  }else {
    console.log("Numero igual a 0")
  }
}

verificar(-2);

console.log("------------------------------------------------");

//desafio 2
let array = [1, 3, 5, 7, 9];

function verificarElemento(array, numero){
  if(array.includes(numero)) {
    console.log(`O numero ${numero} existe no array`)
  }else {
    console.log(`O numero ${numero} não existe no array`)
  }
}

verificarElemento(array, 5);

console.log("------------------------------------------------");

//desafio 3

const products = [
  {name: "Maça", price: 2.5},
  {name: "Coca cola", price: 8},
  {name: "Guarana", price: 5},
  {name: "Chocolate", price: 20}

]

const checkProducts = products.find((product)=> product.price === 20)
console.log(checkProducts)

const product = products.filter((product)=> product.price < 8)
console.log(product)