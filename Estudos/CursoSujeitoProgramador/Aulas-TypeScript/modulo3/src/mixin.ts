import { applyMixins } from './mixin/applyMixin.js';

class Automovel {
  ligar(): void {
    console.log("Automovel ligado");
  }
  desligar(): void {
    console.log("Automovel desligado");
  }
}

class Especificacao {
  descricao: string;
  constructor(descricao: string) {
    this.descricao = descricao;
  }
}

class Carro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

interface Carro extends Automovel, Especificacao { }

applyMixins(Carro, [Automovel, Especificacao])

const carro = new Carro("Fusca");
console.log(carro)

carro.ligar();

carro.descricao = "Carro popular";
console.log(carro);
carro.desligar();