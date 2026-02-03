var usuario = Number(prompt("digite um número de 1 a 6"));

switch(usuario){
  case 1:
    alert("janeiro");
    break;
  case 2:
    alert("fevereiro");
    break;
  case 3:
    alert("março");
    break;
  case 4:
    alert("abril");
    break;
  case 5:
    alert("maio");
    break;
  case 6:
    alert("junho");
    break;
  default:
    alert("Número inválido. Escolha um número entre 1 e 6.");
}