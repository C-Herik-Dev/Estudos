import { MdPets } from "react-icons/md";

export function Footer(){
  return(
    <footer className="w-full bg-white border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-6 py-6">

    <div className="flex flex-col items-center gap-3 md:items-start md:grid md:grid-cols-4 md:gap-6">

      <div className="flex flex-col items-center gap-2 md:items-start">
        <div className="flex items-center gap-3">
          <MdPets
            size={34}
            className="text-white bg-green-500 p-1 rounded-2xl"
          />
          <strong className="text-lg font-bold text-gray-900">
            PetStore
          </strong>
        </div>

        <p className="text-sm text-gray-500 text-center md:text-left max-w-xs">
          Tudo o que seu animal de estimação precisa em um só lugar.
        </p>
      </div>

      <div className="hidden md:flex flex-col gap-2">
        <strong className="text-sm font-semibold text-gray-900">
          Comprar
        </strong>
        <span className="text-sm text-gray-500 hover:text-green-500 cursor-pointer">
          Produtos para cães
        </span>
        <span className="text-sm text-gray-500 hover:text-green-500 cursor-pointer">
          Produtos para gatos
        </span>
      </div>

      <div className="hidden md:flex flex-col gap-2">
        <strong className="text-sm font-semibold text-gray-900">
          Empresa
        </strong>
        <span className="text-sm text-gray-500 hover:text-green-500 cursor-pointer">
          Sobre
        </span>
        <span className="text-sm text-gray-500 hover:text-green-500 cursor-pointer">
          Carreiras
        </span>
      </div>

      <div className="hidden md:flex flex-col gap-2">
        <strong className="text-sm font-semibold text-gray-900">
          Ajuda
        </strong>
        <span className="text-sm text-gray-500 hover:text-green-500 cursor-pointer">
          Suporte
        </span>
        <span className="text-sm text-gray-500 hover:text-green-500 cursor-pointer">
          Contato
        </span>
      </div>

    </div>

    <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col items-center gap-3 md:flex-row md:justify-between">

      <div className="flex gap-4 md:hidden text-sm text-gray-500">
        <span className="hover:text-green-500 cursor-pointer">
          Support
        </span>
        <span className="hover:text-green-500 cursor-pointer">
          Contact
        </span>
      </div>

      <div className="flex flex-1 justify-center gap-4 text-sm text-gray-500 md:gap-4">
        <span>© 2026 PetStore. All rights reserved.</span>
        <span className="hover:text-green-500 cursor-pointer">
          Terms
        </span>
        <span className="hover:text-green-500 cursor-pointer">
          Privacy
        </span>
      </div>

    </div>

  </div>
</footer>

  )
}