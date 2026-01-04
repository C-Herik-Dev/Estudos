// propriedade Decorator

function validaNome(tamanho: number){
  //target = construtor da classe
  // key = nossa propriedade
  return (target: any, key: string) => {
    let valor = target[key];
    const getter = () => valor;
    const setter = (value: string) => {
      if(value === ""){
        console.log("O nome não pode ser vazio");
      }else if(value.length < tamanho){
        console.log(`O nome deve ter no minimo ${tamanho} caracteres`);
      }else{
        valor = value;
      }
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
      })
  }
}

class Jogo{
  @validaNome(5)
  nome: string; // propriedade que sera decorada

  constructor(nome: string){
    this.nome = nome;
  }
}

const jogo1 = new Jogo("Zelda");
console.log(jogo1.nome);