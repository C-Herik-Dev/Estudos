/*
 ### O que é uma Classe? ###
  Uma classe é um molde (ou template) para criar objetos com propriedades e métodos específicos.
  Ela define a estrutura e o comportamento dos objetos que serão instanciados a partir dela.

  Ou seja, um conjunto de atributos e metodos que caracterizam um objeto.
 */
class Loja {
    // Metodo construtor da classe
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    criarLoja() {
        console.log(`Loja ${this.nome} criada com sucesso! Endereço: ${this.endereco}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Novo pedido para a mesa ${mesa}: ${pedido}`);
        });
        return `pedido na mesa: ${mesa}`;
    }
    mudaStatus(status) {
        if (status === "aberto") {
            console.log("A loja está aberta!");
        }
        else {
            console.log("A loja está fechada!");
        }
    }
}
const loja1 = new Loja("Red Burger", "Rua A, 123");
// console.log(loja1.nome)
loja1.criarLoja();
const returnoPedido = loja1.emitirPedido(5, "X-Burger", "Batata Frita", "Refrigerante");
console.log(returnoPedido);
loja1.mudaStatus("fechado");
export {};
//# sourceMappingURL=classe.js.map