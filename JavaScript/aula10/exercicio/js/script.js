const numero = Number(prompt ("digite um numero:"));
const numeroTitulo = document.getElementById("numero-titulo").innerHTML = numero;
const raizQuadrada = document.getElementById("raiz").innerHTML = `<p>Raiz quadrada do seu número é: ${numero ** 0.5}</p>`;
const numeroInteiro = document.getElementById("inteiro").innerHTML = `<p>Seu número ${numero} é inteiro?: ${Number.isInteger(numero)}</p>`;
const nan = document.getElementById("nan").innerHTML = `<p>É NaN?: ${Number.isNaN(numero)}</p>`;
const arredondaCima = document.getElementById("arredonda-cima").innerHTML = `<p>Seu número arredondado para cima é: ${Math.ceil(numero)}</p>`;
const arredondaBaixo = document.getElementById("arredonda-baixo").innerHTML = `<p>Seu número arredondado para baixo é: ${Math.floor(numero)}</p>`;
const casasDecimais = document.getElementById("casas-decimais").innerHTML = `<p>Seu número com duas casas decimais fica assim: ${numero.toFixed(2)}</p>`;