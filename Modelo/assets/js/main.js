const form = document.querySelector('form');

form.addEventListener('submit', function (event)  {
 event.preventDefault();
 const inputPeso = event.target.querySelector('#peso');
 const inputAltura = event.target.querySelector('#altura');
 
 const peso = Number(inputPeso.value);
 const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);

  console.log(imc);

});

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (mensagem, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();
  p.innerHTML = mensagem;
  resultado.appendChild(p);
   
}