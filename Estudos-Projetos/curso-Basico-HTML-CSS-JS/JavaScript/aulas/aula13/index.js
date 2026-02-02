/* const pessoa1 = {
  nome: 'Carlos',
  sobrenome: 'Silva',
  idade: 30
};

const pessoa2 = {
  nome: 'Maria',
  sobrenome: 'Oliveira',
  idade: 25
};

console.log(pessoa1.nome); // Carlos
console.log(pessoa1.sobrenome); // Silva */

/*                        parametros
function criaPessoa (nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  };
};
//                              argumentos
const pessoa1 = criaPessoa ('Carlos', 'Silva', 30);
const pessoa2 = criaPessoa ('João', 'Linhares', 20);
const pessoa3 = criaPessoa ('Maria', 'Andrade', 40);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome); 
*/

const pessoa1 = {
  nome: 'Carlos',
  sobrenome: 'Herik',
  idade: 30,
  fala() {
    console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
  },
  incrementaIdade() {
    this.idade++;
  }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();