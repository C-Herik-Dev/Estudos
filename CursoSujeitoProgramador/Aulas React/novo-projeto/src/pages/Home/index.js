import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem vindo a pagina Home!</h1>
      <span>Meu Projeto</span> <br /> <br />

      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
      <hr />
      <br /> <br />

      <Link to="/produto/1234">Produto 1234</Link>
    </div>
  );
}

export default Home;