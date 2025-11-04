// herança > uma classe pode herdar propriedades e métodos de outra classe
// classePai tem seus atributos e métodos herdados pela classeFilha

class Usuario{
  nome: string;
  email: string;

  constructor(nome: string, email: string){
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario{
  cargo: string;
  nivel: number;

  constructor(nome: string, email: string, cagor: string, nivel: number){
    super(nome, email); // precisa ser o primeiro a ser chamado
    
    this.cargo = cagor;
    this.nivel = nivel;
  }
}

const usuario1 = new Admin("heriky", "herik@herik.com", "admin", 1);
console.log(usuario1);