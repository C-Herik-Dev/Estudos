"use strict";
// herança > uma classe pode herdar propriedades e métodos de outra classe
// classePai tem seus atributos e métodos herdados pela classeFilha
/*
class Usuario{
  id: number;
  nome: string;
  email: string;

  constructor(id: number, nome: string, email: string){
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario{
  cargo: string;
  nivel: number;

  constructor(id: number, nome: string, email: string, cagor: string, nivel: number){
    super(id, nome, email); // precisa ser o primeiro a ser chamado
    
    this.cargo = cagor;
    this.nivel = nivel;
  }
}

const usuario1 = new Admin(123542, "heriky", "herik@herik.com", "admin", 1);
console.log(usuario1);
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
ENCAPSULAMENTO > controlar o acesso aos dados de uma classe,
permitindo que apenas métodos específicos possam ler ou modificar esses dados.

// Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
// public, protected, private, readonly -> (apenas nos atributos)

  >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da
  classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

  >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados,
  Ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

  >> E o famoso readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
  nao podemos alterar ele.

*/
class Usuario {
    id; // podemos chamar na classe usuario ou na classe que extende a classe usuario
    nome;
    email;
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(id, nome, email, cagor, nivel) {
        super(id, nome, email); // precisa ser o primeiro a ser chamado
        this.cargo = cagor;
        this.nivel = nivel;
    }
    mudarCargo() {
        console.log(`O cargo do usuário ${this.nome} foi alterado.`);
    }
}
const usuario1 = new Admin(123542, "heriky", "herik@herik.com", "admin", 1);
//usuario1.id; // Erro: A propriedade 'id' é protegida e só pode ser acessada dentro da classe 'Usuario' e suas subclasses.
console.log(usuario1);
//# sourceMappingURL=heranca.js.map