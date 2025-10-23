import {Link} from 'react-router-dom';

function Erro() {
  return(
    <div>
      <h1>Ops, parece que essa pagina não existe!</h1> <br />


      <h3>Navegue por nossas paginas abaixo.</h3> <br />
      <Link to="/">Home</Link> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
    </div>
  )
}

export default Erro;