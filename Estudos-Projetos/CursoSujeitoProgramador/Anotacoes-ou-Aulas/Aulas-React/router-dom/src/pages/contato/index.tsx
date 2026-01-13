import { Link } from 'react-router'

export function Contato() {
  return (
    <div>

      
      <h2>Pagina de contato</h2>
      <p>telefone: (11) 99999-9999</p>
      <p>email: contato@empresa.com</p>

      <Link to="/">Home</Link> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/produto">Produto</Link>
    </div>
  )
}