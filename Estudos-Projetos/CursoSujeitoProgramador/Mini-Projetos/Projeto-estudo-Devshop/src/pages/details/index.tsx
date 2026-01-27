import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import { BsCartPlus } from 'react-icons/bs'
import type { ProductsProps } from '../home'
import { api } from '../../services/api'
import toast from 'react-hot-toast'

export function Details() {
  const { addItemCart } = useContext(CartContext)
  const {id} = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<ProductsProps | null>(null)

  useEffect(() => {
      async function getProducts() {
        try{
          const response = await api.get(`/products/${id}`)
        setProduct(response.data)
        } catch(error){
          console.log("erro ao buscar produtos", error)
        }
      }
  
      getProducts()
    }, [])

  if(!product){
    return <p className="w-full h-60 flex items-center justify-center text-zinc-600 text-lg font-medium">Carregando detalhes...</p>
  }
  
  return(
    <div className="w-full max-w-7xl mx-auto px-4 mt-10">
  <div className="flex gap-10 items-start">

    <div className="w-1/2 flex justify-center">
      <img
        className="max-w-sm"
        src={product.cover}
        alt={product.title}
      />
    </div>
    
    <div className="w-1/2 flex flex-col gap-6">
      <h1 className="font-bold text-2xl">
        {product.title}
      </h1>

      <p className="text-zinc-600 leading-relaxed">
        {product.description}
      </p>

      <div className="flex items-center gap-4 mt-4">
        <strong className="text-xl text-zinc-800">
          {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
        </strong>

        <button
          className="bg-zinc-900 p-2 rounded hover:bg-zinc-800 transition"
          onClick={() => {
            addItemCart(product), 
            navigate('/cart'),
            toast.success("Produto adicionado ao carrinho!")
          }}
        >
          <BsCartPlus size={22} color="#fff" />
        </button>
      </div>
    </div>

  </div>
</div>

  )
}