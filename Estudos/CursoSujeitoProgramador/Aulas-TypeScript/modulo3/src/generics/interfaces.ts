  interface NovoProduto<T extends number> {
    nome: string;
    preco: T;

    formatar(valor: T): string;
  }
// type NovoProduto<T extends number> = {
//   nome: string;
//   preco: T;
// }

  const arroz: NovoProduto <number> ={
    nome: "Arroz",
    preco: 12.99,
    formatar(valor: number): string{
      let valorFormatado = valor.toLocaleString('pt-BR',
        {
          style: 'currency',
          currency: 'BRL'
        }
      )
      return valorFormatado;
    
    }
  }
  console.log(arroz);
  console.log(arroz.formatar(15.99));