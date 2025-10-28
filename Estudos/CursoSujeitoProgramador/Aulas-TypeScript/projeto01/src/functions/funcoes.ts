
// function login(username: string): boolean{ // poderia ser boolean | string ou outro tipo
//   let message = "Bem vindo " + username;
//     console.log(message);

//     return true;
// }

// const returnLogin = login("Carlos Herik");

// console.log(returnLogin);

let n1: number = 10;
//let n2: string = "20";
let n2: number = 20;

function soma(valor1: number, valor2: number): number | string{
  let soma = valor1 + valor2;

  //return soma;

  
  if(soma >= 30){
    return "Valor maior que 30 ou igual a 30";
  }else{
    return "Valor menor que 30";
  }

}

console.log(soma(n1, n2));