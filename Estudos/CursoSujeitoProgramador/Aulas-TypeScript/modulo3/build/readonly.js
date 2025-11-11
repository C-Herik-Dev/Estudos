"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    id = "135420";
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const carlos = new Pessoa("Carlos", 30);
console.log(carlos);
//# sourceMappingURL=readonly.js.map