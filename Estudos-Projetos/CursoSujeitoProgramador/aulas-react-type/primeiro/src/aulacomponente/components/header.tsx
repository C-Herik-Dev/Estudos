
import './header.css';

interface HeaderProps{
  title?: string;
}

export function Header({title}: HeaderProps) { // Componente Header
//>> export function Header(title = "Curso ReactJS + TypeScript") <<
//titile? = propriedade opcional, mas colocamos um valor padrão nele.
  return(
    <header className='header'>
      <h1 className='title'>{ title }</h1>

      <hr />
    </header>
  )
}