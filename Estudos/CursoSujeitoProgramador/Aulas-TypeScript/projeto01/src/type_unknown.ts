// tipo desconhecido

let total: unknown; // Quando não sabemos o tipo que a variável vai receber
total = 20;
total = "Vinte";

console.log(total);

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;
//let totalEntrega: number = totalPedido; -> Valor do tipo unknown(desconhecido) so podem ser atribuidos aos tipos unknown ou any
let totalEntrega: any = totalPedido;

console.log(entregador, totalEntrega);