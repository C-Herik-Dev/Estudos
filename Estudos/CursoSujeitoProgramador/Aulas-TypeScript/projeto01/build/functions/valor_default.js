"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// como deixar um valor por default ou deixar ele opcional.
//                                         nome?: -> "opcional" ira aparecer como string ou undefined // -> nome = "Aluno" -> valor default
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro("teste@teste.com", "senha13542");
//# sourceMappingURL=valor_default.js.map