"use strict";
// Tupla não existe no JS
// tupla é um array com tipos fixos e quantidade fixa de elementos
Object.defineProperty(exports, "__esModule", { value: true });
let aluno;
aluno = ['João', 24];
// aluno = [24, 'João'] // ERRO -> precisa ser seguido a mesma ordem e tipos
aluno.push("herik", 30);
//aluno.push(30, "herik") Erro / deve serguir a ordem e tipos
console.log(aluno);
//# sourceMappingURL=type_tupla.js.map