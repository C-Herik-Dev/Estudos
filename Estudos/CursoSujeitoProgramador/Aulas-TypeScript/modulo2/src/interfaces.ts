

// conjuto de dados (um padrão) para descrever a estrutura de um objeto.
interface LojaProps{
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: LojaProps = {
  nome: "Burguer K",
  endereco: "Rua dos Bobos, 0",
  status: true
}

console.log(BurguerK);
console.log("==========================")

function novaLoja({nome, endereco, status}: LojaProps): void {
  console.log(`Loja ${nome} criada com sucesso!`);
  console.log(`Endereço da loja: ${endereco}`);
  console.log(`Status da loja: ${status ? "Aberta" : "Fechada"}`);
}

novaLoja({nome: "Burguer King", endereco: "Avenida dos Impossíveis, 123", status: false});