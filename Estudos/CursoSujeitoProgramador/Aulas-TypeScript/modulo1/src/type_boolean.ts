// Type BOOLEAN

let estaAutenticado: boolean; // poderia atribuir ja tbm -> let estaAutenticado: boolean = true;
estaAutenticado = false

let codeStatus: number = 1;

// Tudo que for diferente de "ZERO, STRING VAZIA, UNDEFINED" - sera true
estaAutenticado = Boolean(codeStatus); //true

console.log(estaAutenticado);
