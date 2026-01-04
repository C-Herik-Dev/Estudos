import { Link } from 'react-router'

export function NotFound() {
  return (
    <div>
      <h1>Pagina não encontrada</h1>

      <Link to="/">Pagina inicial</Link>
    </div>
  )
}