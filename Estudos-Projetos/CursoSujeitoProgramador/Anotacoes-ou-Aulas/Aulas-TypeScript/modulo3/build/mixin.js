import { applyMixins } from './mixin/applyMixin.js';
class Automovel {
    ligar() {
        console.log("Automovel ligado");
    }
    desligar() {
        console.log("Automovel desligado");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
applyMixins(Carro, [Automovel, Especificacao]);
const carro = new Carro("Fusca");
console.log(carro);
carro.ligar();
carro.descricao = "Carro popular";
console.log(carro);
carro.desligar();
//# sourceMappingURL=mixin.js.map