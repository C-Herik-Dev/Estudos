import { Link } from 'react-router'
import { useParams} from 'react-router'

export function Produto() {
  const { id } = useParams()

  return (
    <div>
    

      <h1>Pagina do produto {id}</h1>

      <Link to="/">Home</Link> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
    </div>
  )
}