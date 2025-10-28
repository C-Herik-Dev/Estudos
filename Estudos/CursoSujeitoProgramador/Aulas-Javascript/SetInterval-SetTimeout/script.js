// setInterval

function acao(){
  document.write("Executando... <br>")
}

setInterval(acao, 5000)

console.log("--------------------------");

setInterval(() => {
  document.write("Executando!!! <br>")
},1000)

console.log("--------------------------");

function acao(){
  document.write("Executando... <br>")
}

setTimeout(acao, 3000);