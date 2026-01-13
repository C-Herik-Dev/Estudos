// como deixar um valor por default ou deixar ele opcional.
//                                         nome?: -> "opcional" ira aparecer como string ou undefined // -> nome = "Aluno" -> valor default
function cadastro(email: string, senha: string, nome = "Aluno", idade?: number): void {
  let data = {email, senha, nome, idade};
  console.log(data);
}

cadastro("teste@teste.com", "senha13542");