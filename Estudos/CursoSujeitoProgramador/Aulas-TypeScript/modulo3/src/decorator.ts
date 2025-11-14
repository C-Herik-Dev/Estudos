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

@logInfo("Servidor esá rodando...") 
class Sistema{

}