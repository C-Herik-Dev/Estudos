import { MdPets } from "react-icons/md"
import { FiSearch, FiShoppingCart } from "react-icons/fi"
import { Link } from 'react-router'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header(){
  const { cartAmount } = useContext(CartContext)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return(
    <header
      className={`
        w-full bg-white border-b border-gray-100 h-20
        fixed top-0 z-50
        transition-transform duration-300
        ${show ? 'translate-y-0 shadow-sm' : '-translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
    
        <div className="flex items-center gap-4">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3"
          >
            <MdPets
              size={40}
              className="text-white bg-green-500 p-1 rounded-2xl"
            />
            <strong className="text-xl font-bold text-gray-900">
              PetStore
            </strong>
          </Link>

          <div className="relative">
            <FiSearch
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
            />
            <input
              type="text"
              placeholder="Procurar por produtos..."
              className="w-full pl-11 pr-4 py-2 rounded-full bg-gray-100 text-sm text-green-500 placeholder-green-700 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex-1" />

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            to="/"
            className="text-sm font-bold text-gray-700 hover:border-b-2 hover:border-green-500 pb-1"
          >
            Inicio
          </Link>

          <strong className="text-sm font-bold text-gray-700 hover:border-b-2 hover:border-green-500 pb-1 cursor-pointer">
            Comprar
          </strong>

          <strong className="hidden lg:block text-sm font-bold text-gray-700 hover:border-b-2 hover:border-green-500 pb-1 cursor-pointer">
            Categorias
          </strong>

          <strong className="hidden lg:block text-sm font-bold text-gray-700 hover:border-b-2 hover:border-green-500 pb-1 cursor-pointer">
            Ofertas
          </strong>
        </nav>

        <Link to="/cart" className="relative ml-4">
          <FiShoppingCart size={22} className="text-gray-700" />
          {cartAmount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-green-500 text-white rounded-full flex items-center justify-center">
              {cartAmount}
            </span>
          )}
        </Link>

      </div>
    </header>
  )
}
