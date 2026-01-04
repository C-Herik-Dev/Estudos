"use strict";
// type Alias conseguimos criar tipos mais poderosos e reutilizáveis, com mais informações sobre o que aquele tipo representa, e mais do que os tipos primitivos
Object.defineProperty(exports, "__esModule", { value: true });
const produtoInfo = {
    id: 1,
    nome: "GTX 4090",
    //descricao: "Placa de vídeo top de linha da NVIDIA"
};
const categoria1 = {
    slug: "hardware",
    quantidade: 100
};
const novoProduto = {
    id: 13542,
    nome: "Ryzen 9 7950X",
    //descricao: "Processador top de linha da AMD",
    slug: "hardware",
    quantidade: 50
};
console.log(novoProduto);
//# sourceMappingURL=type_intersection.js.map