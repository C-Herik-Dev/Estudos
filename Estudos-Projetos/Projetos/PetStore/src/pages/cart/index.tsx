import { HiHome } from 'react-icons/hi'
import { FaTrashAlt } from 'react-icons/fa'
import { BsCreditCard, BsTruck } from 'react-icons/bs'
import { MdPix } from 'react-icons/md'
import { FaBarcode } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import toast from 'react-hot-toast'

export function Cart() {
  const { cart, addItemCart, removeItemCart ,cartAmount, total, removeTotal, clearCart } = useContext(CartContext)

  function handleFinishPurchase() {
  const toastId = toast.loading('Processando pagamento...')

  setTimeout(() => {
    toast.dismiss(toastId)
    toast.success('Compra finalizada com sucesso!', {
    position: 'top-center'
  })
    clearCart()
  }, 1500)
}

  return (
    <main className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 sm:mb-8">
          <HiHome size={18} />
          <span>Home</span>
          <span>{'>'}</span>
          <span className="font-medium text-gray-800">Carrinho de compras</span>
        </div>

        {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Seu carrinho está vazio...</p>
            <Link to='/'
              className="bg-green-500 my-3 p-1 px-3 text-white font-medium rounded"
            >
              Acessar produtos
            </Link>
        </div>
      )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          <div className="lg:col-span-2 flex flex-col gap-6">
            {cartAmount > 0 && (
              <div className="flex items-center justify-between">
              <h1 className="text-xl sm:text-2xl font-bold">Seu Carrinho</h1>
              <span className="text-gray-600 text-sm sm:text-base">({cartAmount} items)</span>
            </div>
            )}
            
            {cart.map((item) =>(
              <section 
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  src={item.cover}
                  alt={item.title}
                />

                <div className="flex flex-col gap-4 sm:gap-6">
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    {item.title}
                  </p>

                  <div className="flex items-center justify-between border bg-gray-200/60 py-2 border-gray-100 rounded-2xl px-6 sm:px-10 font-semibold w-32">
                    <button 
                    onClick={() => removeItemCart(item)}
                    className="cursor-pointer">-</button>

                    <span>{item.amount}</span>

                    <button 
                    onClick={() => addItemCart(item)}
                    className="cursor-pointer">+</button>
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 sm:gap-8">
                <button 
                onClick={() => removeTotal(item)}
                className="text-gray-400 hover:text-red-500 transition cursor-pointer">
                  <FaTrashAlt size={18} />
                </button>

                <strong className="text-green-500 text-base sm:text-lg">
                  {item.total.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </strong>
              </div>
            </section>
            ))}
          </div>

          {cartAmount > 0 && (
            <aside className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm h-fit lg:sticky lg:top-6">
            <h2 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6">
              Resumo do pedido
            </h2>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <strong>{total}</strong>
              </div>

              <div className="flex justify-between">
                <span>Frete</span>
                <strong className="text-green-500">FREE</strong>
              </div>

              <hr className="border-gray-200" />

              <div className="flex justify-between text-base sm:text-lg">
                <strong>Total</strong>
                <strong className="text-green-500">{total}</strong>
              </div>
            </div>

            <button 
            onClick={handleFinishPurchase}
            className="w-full mt-6 bg-green-500 py-3 rounded-xl hover:bg-green-600 transition font-medium text-sm sm:text-base cursor-pointer">
              Finalizar compra →
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Opções de pagamento seguras
            </p>

            <div className="text-gray-600 flex items-center justify-center gap-4 pt-4">
              <BsCreditCard size={20} />
              <MdPix size={20} />
              <FaBarcode size={20} />
            </div>

            <div className="bg-gray-100 rounded-xl flex items-center gap-3 px-4 py-4 mt-6">
              <BsTruck size={20} color="#008000" />
              <p className="font-medium text-sm">Frete rápido grátis</p>
            </div>
          </aside>
          )}
        </div>

        {cartAmount > 0 && (
          <Link to="/" className="inline-block mt-6 text-green-500 font-medium">
          ← Continue comprando
        </Link>
        )}
      </section>
    </main>
  )
}
