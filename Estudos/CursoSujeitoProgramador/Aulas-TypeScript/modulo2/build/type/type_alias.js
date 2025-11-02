"use strict";
// Type Alias serve criar coisas que seriam tipos complexos ou repetitivos
Object.defineProperty(exports, "__esModule", { value: true });
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`);
}
acessar(123, "Herik");
acessar("13542", "Carlos");
logUsuario("135420");
console.log("==================================================================");
function comprarItem(moeda) {
    console.log(`Comprando com a moeda: ${moeda}`);
}
comprarItem("BRL");
comprarItem("BTC");
//comprarItem("INR") -> Gera erro pois INR não está incluso no type alias Moedas
//# sourceMappingURL=type_alias.js.map