// type NovoProduto<T extends number> = {
//   nome: string;
//   preco: T;
// }
const arroz = {
    nome: "Arroz",
    preco: 12.99,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return valorFormatado;
    }
};
console.log(arroz);
console.log(arroz.formatar(15.99));
export {};
//# sourceMappingURL=interfaces.js.map