// DESAFIO MEGA SENA JS
// 1- Crie uma função que espere como argumento um numero e esse numero precisa ser de 6 até 9, caso seja um numero menor que 6 ou maior que 9, essa função deverá retornar um array vazio e um aviso no console que "não é possivel usar esse numero".
// 2- Dentro da função você deverá pegar o numero recebido como argumento e gerar uma lista de numeros aleatórios com base no tamanho do argumento, exemplo: se o usuário mandou 6, você deveá gerar uma lista de numeros contendo 6 numeros aleatórios sem repetir nenhum e os numeros gerados precisam ser entre 1 até 60.
// 3- E ao final deverá retornar uma lista com os numeros gerados.

//Exemplo: argumento digitado 7. 
// o array deve ser com 7 itens -> [01, 02, 04, 10, 30, 60, 88]

let arrayVazio = [];
function entrada(valor){
  if (valor < 6 || valor > 9){
    console.log("Não é possivel usar esse numero!")
    return [];
  }else {
    let listaGerada = [];

    while (listaGerada.length < valor) {
      let numeroAleatorio = Math.floor(Math.random() * 60) +1;
      if (!listaGerada.includes(numeroAleatorio)) {
        listaGerada.push(numeroAleatorio);
      }
    }

    console.log(`Seus numeros da sorte são ${listaGerada}`)
    return listaGerada;
  }
  
}
entrada(9);



// let resultado = entrada(5);
// console.log(resultado);