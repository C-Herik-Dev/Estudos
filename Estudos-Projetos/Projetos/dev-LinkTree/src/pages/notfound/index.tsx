import { Link } from 'react-router'

export function NotFound() {
  return(
    <div className="flex flex-col w-full min-h-screen justify-center items-center text-white">
      <h1 className="font-bold text-6xl mb-4">404 </h1>
      <h1 className="font-bold text-4xl mb-4">Página não encontrada</h1>
      <p className="italic text-1xl mb-4">Você caiu em uma página que não exixte!</p>

      <Link to="/"
      className="bg-gray-50/20 py-1 px-4 rounted-mb">
        Voltar pra home
      </Link>
    </div>
  )
}