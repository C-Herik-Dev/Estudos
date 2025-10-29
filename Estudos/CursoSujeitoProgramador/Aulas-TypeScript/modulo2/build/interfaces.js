"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BurguerK = {
    nome: "Burguer K",
    endereco: "Rua dos Bobos, 0",
    status: true
};
console.log(BurguerK);
console.log("==========================");
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja: ${endereco}`);
    console.log(`Status da loja: ${status ? "Aberta" : "Fechada"}`);
}
novaLoja({ nome: "Burguer King", endereco: "Avenida dos Impossíveis, 123", status: false });
//# sourceMappingURL=interfaces.js.map