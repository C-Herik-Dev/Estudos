// decorator Metodo, ele so é chamado quando nosso metodo for chamado em algum local.
// Ele recebe tres parametros, target, propertyKey e descriptor
// target = prototipo da classe
// propertyKey = nome do metodo
// descriptor = descritor do metodo
// Com o descriptor podemos modificar o comportamento do metodo



//extraindo / importando o decorator de outro arquivo
import { verifacaPessoa } from './decorators/verificaPessoa.js';
/*
function verifacaPessoa(idade: number){
  return(target: any, key: string, descriptor: PropertyDescriptor) => {

    const metodoOriginal = descriptor.value; // guardando o metodo original numa constante
    // Reescrevendo o metodo original
    descriptor.value = function(){
      if(idade < 18){
        console.log("Cadastro feito como pessoa menor de idade")
      }else{
        console.log("Cadastro feito como pessoa adulta")
        return metodoOriginal.apply(this); // chamando o metodo original e fazendo com que o this continue referenciando a classe e mostrando o resultado do metodo original.
      }
    }
  }
}
*/
class Pessoa{
  nome: string;

  constructor(nome: string){
    this.nome = nome;
  }

  @verifacaPessoa(18) 
  cadastrarPessoa(){ // metodo que sera decorado
    console.log(`Bem vindo ao sistema, ${this.nome}.`);
  }
}

const pessoa1 = new Pessoa("Carlos");
pessoa1.cadastrarPessoa();