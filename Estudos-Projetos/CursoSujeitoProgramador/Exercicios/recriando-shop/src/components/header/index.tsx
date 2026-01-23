import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export function Header(){
  const { cartAmount } = useContext(CartContext)

  return(
    <header className='bg-slate-700 w-full px-2'>
      <nav className='flex justify-between h-14 items-center max-w-7xl mx-auto px-5'>
        <Link to="/">
          <h1 className="font-bold text-2xl">
            <span className="bg-linear-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">DevzinhoShop</span>
            </h1>
        </Link>
        
        <Link className='relative' to="cart">
          <FiShoppingCart size={24} color="white"/>
          {cartAmount > 0 && (
            <span className='absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs'>
            {cartAmount}
          </span>
          )}
        </Link>
      </nav>
    </header>
  )
}