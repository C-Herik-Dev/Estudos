let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/*varA = varB; // B
varB = varC; // C
varC = 'A'; // A  Minha resolução kkkkk */

/*
const varATemp = varA;
varA = varB; // B
varB = varC; // C
varC = varATemp; // A */

[varA, varB, varC] = [varB, varC, varA]; 

console.log(varA, varB, varC); // B C A
// Troca de valores entre variáveis