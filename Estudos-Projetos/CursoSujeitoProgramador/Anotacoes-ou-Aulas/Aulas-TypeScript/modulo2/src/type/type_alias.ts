// Type Alias serve criar coisas que seriam tipos complexos ou repetitivos

type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string) {
  console.log(`ID: ${uuid} - Bem vindo ${nome}`)
}

function logUsuario(uuid: Uuid) {
  console.log(`Conta referente ao UUID: ${uuid}`)
}

acessar(123, "Herik")

acessar("13542", "Carlos")

logUsuario("135420")

console.log("==================================================================")

type Moedas = "USD" | "BRL" | "EUR" | "BTC";

function comprarItem(moeda: Moedas){
  console.log(`Comprando com a moeda: ${moeda}`)
}

comprarItem("BRL")
comprarItem("BTC")
//comprarItem("INR") -> Gera erro pois INR não está incluso no type alias Moedas