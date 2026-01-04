/*
  >>Decorators<<
  Class
  Proriedade
  Metodos
  Parametros (pocuco usado)
  Getters e Setters (pouco usado)

  DECORATORS SÃO FUNÇÕES
  não preciso instanciar a classe para usar/chamar o decorator
*/
/*
# Target -> Receber o construtor da classe
function logInfo(target: any){
  console.log(target);
}
*/

// Padrão Factory(Fabrica) | Fução que retorna a criação do decorator

function logInfo(mensagem: string){
  return (target: any) => {
    console.log(`${mensagem}, ${target}`)
  }
}

@logInfo("Servidor esá rodando...")  // Chamando o decorator
class Sistema{ // Decorator de classe

}


// ====================== PRATICANDO ======================================

function setIpServidor(novoIP: string){
  return (target: any) => { // Target é o construtor da classe
    return class extends target{
      ip = novoIP;
    }
  }
}

@setIpServidor("135.205.55.10") // Chamando o decorator
class Servidor{} // Decorator que seta o IP do servidor

const serv1 = new Servidor();
console.log(serv1);