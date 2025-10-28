// Funções anonimas
/*

() => {}
1- Os parênteses, que é por onde a função recebe os argumentos (assim como nas funções tradicionais);
2- "Seta" => - Responsável pelo nome "Arrow";
3- E as chaves: É o bloco de código que representa o corpo da função.
*/

function somar(a,b){
  let total = a + b;
  return console.log(total)
}
somar(10, 30);

console.log("-----------");

let subtrair =(valor1, valor2) => {
  let total = valor1 - valor2;
  console.log(total);
}
subtrair(50, 25);

console.log("------------");

let numeros = [1, 3, 5, 10];
numeros.map((item)=> {
  console.log(item);
})