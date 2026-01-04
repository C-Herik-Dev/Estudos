"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tipagem DINAMICA
let curso = "typeScript";
//curso = 150; // -> ERRO
// let tecnologias = [
//   "PHP",
//   "ReacjtJS",
//   "TypeScript"
// ];
let tecnologias = [
    "PHP",
    "ReacjtJS",
    "TypeScript",
    2025
];
// agora o array pode receber number e string, pq ela define automaticamente por ter string e number dentro do array padrão
tecnologias.push(150);
console.log(tecnologias);
//# sourceMappingURL=type_inference.js.map