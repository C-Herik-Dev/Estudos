/*
Generic - permite criar estrututas que são adaptaveis a varios tipos de dados.
(Ajudando a reaproveitar melhor nosso codigo e deixa-lo mais flexivel)

>> Podemos usar os gererics:
 Funções | interfaces | Classes | Types

 Alguns padrões que você pode usar para nomear tipos genericos:
  T - Type 
  K - Key 
  V - Value 
  E - Element  
  S - State 
*/

function repositorio<T extends string | number>() { // <T> define um tipo generico - pode ser qualquer nome, mas o mais comum é T de Type.
  let dados: T;

  function getDados(){
    return dados;
  }

  function setDados(novoDado: T){
    dados = novoDado;
  }

  return {getDados, setDados};
}

//const repo1 = repositorio(); -> tipo unknown, porque nao definimos o tipo caso o generico não seja informado.

//const repo1 = repositorio<boolean>(); -> erro, porque boolean nao extende string ou number

//const repo1 = repositorio<string | number>(); // definimos o tipo generico como string ou number "forçando" a tipagem.

const repo1 = repositorio();
repo1.setDados(100);
repo1.setDados("100")

console.log(repo1.getDados());