"use strict";
// herança > uma classe pode herdar propriedades e métodos de outra classe
// classePai tem seus atributos e métodos herdados pela classeFilha
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(nome, email, cagor, nivel) {
        super(nome, email); // precisa ser o primeiro a ser chamado
        this.cargo = cagor;
        this.nivel = nivel;
    }
}
const usuario1 = new Admin("heriky", "herik@herik.com", "admin", 1);
console.log(usuario1);
//# sourceMappingURL=heranca.js.map