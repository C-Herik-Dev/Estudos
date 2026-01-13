// não sabemos quantos parametros a função pode receber

// function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number {
//     const total = venda1 + venda2 + venda3 + venda4;
//     console.log(total);

//     return total;
// }

// totalVendas(100, 200, 300, 400);

// rest operator ...
function totalVendas(...vendas: number[]): void {
  const quantidadeVendas = vendas.length;

  console.log(`Você realizou um total de ${quantidadeVendas} vendas.`);
}

totalVendas(100, 200, 300, 400, 500, 600, 700);