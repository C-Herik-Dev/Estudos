/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.9
*/

const primeiroNome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // IMC
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

console.log(`${primeiroNome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(1)}`);
console.log(`${primeiroNome} nasceu em ${anoNascimento}.`);