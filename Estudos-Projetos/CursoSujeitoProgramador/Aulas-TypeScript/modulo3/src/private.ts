// metodo private bem mais restrito que o protected

class Conta{
  private limite: number = 450;

  private aumentarLimite(quantidade: number){
    if(quantidade < 1000){
      this.limite = quantidade;
      console.log(`Agora seu limite é: ${this.limite}`)
    }else{
      console.log("Quantidade excede o limite permitido");
    }
  }

  solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean{
    if(estaAutenticado){
      this.aumentarLimite(quantidade);
    }else{
      return false;
    }
  }
}

const fulaninho = new Conta();

fulaninho.solicitarLimiteApp(true, 900)

console.log(fulaninho)