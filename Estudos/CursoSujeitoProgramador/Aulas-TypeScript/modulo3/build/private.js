"use strict";
// metodo private bem mais restrito que o protected
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    limite = 450;
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log("Quantidade excede o limite permitido");
        }
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
const fulaninho = new Conta();
fulaninho.solicitarLimiteApp(true, 900);
console.log(fulaninho);
//# sourceMappingURL=private.js.map