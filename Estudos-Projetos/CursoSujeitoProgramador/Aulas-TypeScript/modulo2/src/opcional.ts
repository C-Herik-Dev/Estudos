
interface CadastroProps{
  nome?: string;
  email: string;
  senha: string;
}

const novoUsuario: CadastroProps = {
  email: "teste@teste.com",
  senha: "senha13542"
}
// console.log(novoUsuario);

console.log("=============================");

function novoUser(usuario: CadastroProps){
  console.log(usuario.email);
}

novoUser({email: "teste@teste.com", senha: "senha13542"});