"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  function mostraPromocao(preco: number): void {
//   console.log(`Promoção no curso de apenas: R$ ${preco}`)
//  }
const novoCurso = {
    id: "13542",
    nome: "TypeScript",
    preco: 750,
    promocao: (preco) => {
        console.log(`Promoção no curso por apenas: R$ ${preco}`);
    }
};
console.log(novoCurso);
console.log(novoCurso.promocao(500));
console.log("==============================================================");
let somaNumeros = (valor1, valor2) => {
    return valor1 + valor2;
};
console.log(`O resultado da soma é: ${somaNumeros(30.5, 1255.7)}`);
//# sourceMappingURL=funcoes.js.map