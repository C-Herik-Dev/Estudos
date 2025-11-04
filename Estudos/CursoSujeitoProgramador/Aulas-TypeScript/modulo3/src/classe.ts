/*
 ### O que é uma Classe? ###
  Uma classe é um molde (ou template) para criar objetos com propriedades e métodos específicos. 
  Ela define a estrutura e o comportamento dos objetos que serão instanciados a partir dela.

  Ou seja, um conjunto de atributos e metodos que caracterizam um objeto.
 */

  type Status = "aberto" | "fechado";

  class Loja{
    // Atributos
    nome: string;
    endereco: string;

    // Metodo construtor da classe
    constructor(nome: string, endereco: string){
      this.nome = nome;
      this.endereco = endereco;
    }

    criarLoja(): void{
      console.log(`Loja ${this.nome} criada com sucesso! Endereço: ${this.endereco}`);
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string{
      pedidos.map((pedido) => {
        console.log(`Novo pedido para a mesa ${mesa}: ${pedido}`);
      })

      return `pedido na mesa: ${mesa}`;
    }

    mudaStatus(status: Status): void{
      if(status === "aberto"){
        console.log("A loja está aberta!");
      }else{
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