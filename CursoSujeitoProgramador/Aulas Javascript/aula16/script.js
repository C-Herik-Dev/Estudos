// includes, startsWith, endsWith

// includes -> case sensitive / Retorno em bolean(True ou False)

let nomes = ["Carlos", "Matheus", "Lucas", "Jose"];
console.log(nomes.includes("Carlos"))

if(nomes.includes("Maria")){
  console.log("Esta na lista")
}else{
  console.log("Não esta na lista")
}


console.log("---------------");

// startWith -> Verifica se tem palavra/frase que começa com tais letras |Case sensitive | retorno em bolean

// endsWith -> Verifica se tem palavra/frase termina com tais letras |Case sensitive | retorno em bolean

let nome = "Matheus";
console.log(nome.startsWith("Mat"));
console.log(nome.endsWith("eus"));