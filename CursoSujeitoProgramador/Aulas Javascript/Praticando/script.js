/*
🧩 Exercício 1

Peça ao usuário um número e diga se ele é par ou ímpar.

🔢 Exercício 2

Peça três números diferentes e mostre qual deles é o maior.

🔄 Exercício 3

Mostre na tela todos os números de 1 até 10, um por linha.

✋ Exercício 4

Peça ao usuário um número e mostre a tabuada dele de 1 a 10.

🧮 Exercício 5

Peça ao usuário um número N e calcule a soma de todos os números de 1 até N.
*/


function parouImpar (numero) {

  if ( numero % 2 == 0){
    console.log(`O número: ${numero}, é par`)
  }else {
    console.log(`O número: ${numero}, é impar`)
  }
}

parouImpar(15)

console.log('----------------------------')

let maiorNumero = (a, b, c) => {
  if(a > b && a > c){
    console.log(`${a} é o maior número!`)
  }else if(b > a && b > c){
    console.log(`${b} é o maior número!`)
  }else(
    console.log(`${c} é o maior número!`)
  )
}

maiorNumero(100, 90, 35)

// let a = 10
// let b = 25
// let c = 7

// let maior = Math.max(a, b, c)
// console.log(`O maior número é: ${maior}`)

console.log('----------------------------')

for (i = 1; i <= 10; i++) {
  console.log(i)
}

console.log('----------------------------')


let numero = 5

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`)
}


console.log('----------------------------')


let n = 20
let soma = 0

for (let i = 1; i <= n; i++) {
  soma += i
}

console.log(`A soma de 1 até ${n} é: ${soma}`)