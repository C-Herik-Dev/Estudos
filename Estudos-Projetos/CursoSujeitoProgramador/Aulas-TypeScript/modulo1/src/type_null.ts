// Type Null é um tipo especial em TypeScript que representa a ausência de valor.
// Ele é usado para indicar que uma variável não possui um valor válido.

// Type Undefined é outro tipo especial que indica que uma variável foi declarada, mas ainda não foi inicializada com um valor.

let exemplo: (string | null)

exemplo = null; // poderia vir uma string ou null de uma API externa por exemplo
console.log(exemplo);