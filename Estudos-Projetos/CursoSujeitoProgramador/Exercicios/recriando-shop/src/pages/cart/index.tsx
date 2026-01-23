import { CartContext }  from '../../context/cartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export function Cart(){
  const { cart, total , addItemCart, removeItemCart} = useContext(CartContext)

  return(
    <div className="w-full max-w-7xl mx-auto pr-5 pl-5">
        <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

          {cart.map( (item) => (
            <section 
            key={item.id}
            className="flex items-center justify-between border-b-2 border-gray-300">
            <img 
              className='w-28' 
              src={item.cover} 
              alt={item.title} 
            />
            <strong>
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}
            </strong>

           <div className="flex items-center justify-center gap-3">
          <button 
          onClick={ () => removeItemCart(item)}
          className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
          >
            -
          </button>

          {item.amount}

          <button 
          onClick={ () => addItemCart(item) }
          className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
          >
            +
          </button>
        </div>

          <strong className="float-right">
          SubTotal: {item.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
            </strong>    
          </section>
          ))}
      {cart.length !== 0 && <p className="font-bold mt-4">
        Total: {total}</p>}
    </div>
  )
}