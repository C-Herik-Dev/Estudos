// MAP = percorrer todo um array

let lista = ["Carlos", "Herik", "Lucas", "Matheus"];

lista.map((item, index) => {
  console.log(`PASSANDO: ${item} - Esta na posição ${index}`)
})

console.log("------------");

//Reduce = O reduce busca reduzir um array.

let numeros = [5, 3, 2, 7];

 let total = numeros.reduce((acumulador, numero, indice, original) =>{
  console.log(`${acumulador} - total ate o momento`)
  console.log(`${numero} - numero atual`)
  // console.log(`${indice} - indice`)
  // console.log(`${original} - array original`)
  console.log("---------------")

  return acumulador += numero;
 })

 console.log("TOTAL DO REDUCE: " + total);