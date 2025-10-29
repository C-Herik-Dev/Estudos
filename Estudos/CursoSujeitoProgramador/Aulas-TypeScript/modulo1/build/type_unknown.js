"use strict";
// tipo desconhecido
Object.defineProperty(exports, "__esModule", { value: true });
let total; // Quando não sabemos o tipo que a variável vai receber
total = 20;
total = "Vinte";
console.log(total);
let idPedido = 123;
let totalPedido = 15;
let entregador = idPedido;
//let totalEntrega: number = totalPedido; -> Valor do tipo unknown(desconhecido) so podem ser atribuidos aos tipos unknown ou any
let totalEntrega = totalPedido;
console.log(entregador, totalEntrega);
//# sourceMappingURL=type_unknown.js.map