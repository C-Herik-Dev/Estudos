
export function Footer(){
  return(
    <footer className="w-full bg-slate-700 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center gap-2">
        
        <strong className="text-lg">DevzinhoShop</strong>

        <p className="text-sm text-gray-300 text-center">
          Projeto de estudos em React + Context API
        </p>

        <span className="text-xs text-gray-400">
          © {new Date().getFullYear()} - Todos os direitos reservados
        </span>

      </div>
    </footer>
  )
}