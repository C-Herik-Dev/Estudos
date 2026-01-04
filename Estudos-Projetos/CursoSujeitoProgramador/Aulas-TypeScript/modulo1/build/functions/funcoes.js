"use strict";
// function login(username: string): boolean{ // poderia ser boolean | string ou outro tipo
//   let message = "Bem vindo " + username;
//     console.log(message);
Object.defineProperty(exports, "__esModule", { value: true });
//     return true;
// }
// const returnLogin = login("Carlos Herik");
// console.log(returnLogin);
let n1 = 10;
//let n2: string = "20";
let n2 = 20;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    //return soma;
    if (soma >= 30) {
        return "Valor maior que 30 ou igual a 30";
    }
    else {
        return "Valor menor que 30";
    }
}
console.log(soma(n1, n2));
//# sourceMappingURL=funcoes.js.map