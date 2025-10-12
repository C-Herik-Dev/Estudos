import { Link } from 'react-router-dom'

function Sobre() {
  return (
    <div>
      <h1>Pagina Sobre!</h1> <br />
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, reprehenderit, tempore ipsam, voluptates illum quos molestias ab explicabo ducimus temporibus veritatis qui nam quidem enim sit ad eos assumenda facilis?</span> <br /> <br />

      <Link to="/">Home</Link> <br />
      <Link to="/contato">Contato</Link>

    </div>
  );
}

export default Sobre;