import { Link } from 'react-router'
import './index.css'


export function Header(){
  return (
    <header>
      <h2>Carlos.Dev</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link> 
        <Link to="/contato">Contato</Link> 
      </div>
    </header>
  )
}