"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let produto1 = {
    id: 13542,
    nome: "Camisa Oversize",
    descricao: "Camisa de algodão oversize"
};
//produto1.id = 12345;  Erro: Cannot assign to 'id' because it is a READ-ONLY property.
produto1.descricao = "Camisa de algodão oversize - nova coleção";
console.log(produto1);
console.log(produto1.id);
//# sourceMappingURL=readonly.js.map