
class Pessoa{
  readonly id: string = "135420";
  nome: string;
  idade: number;

  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }
}

const carlos = new Pessoa("Carlos", 30);

console.log(carlos)