let listaProdutos = ["Computador", "Telefone", "Mouse","Teclado"];

console.log("Listando todos os Produtos " + listaProdutos);

console.log("Quantidade disponivel de produtos " + listaProdutos.length);

// listaProdutos.splice(1.1)


let buscar = listaProdutos.filter((item)=>{
  return item === "Computador";
})

if (buscar.length > 0) {
  console.log(`O produto ${buscar[0]} Existe na lista!`);
}else {
  console.log("O produto não foi encontrado");
}

console.log("--------------------------------");

let lista = [1, 3, 5, 7, 0, 9]

let listaOrdenada = lista.sort((a,b)=> a - b)
console.log(listaOrdenada);

let listaInvertida = listaOrdenada.reverse();
console.log(listaInvertida);

let hoje = '17/07/2019';
const [dia, mes, ano] = hoje.split('/');

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);



