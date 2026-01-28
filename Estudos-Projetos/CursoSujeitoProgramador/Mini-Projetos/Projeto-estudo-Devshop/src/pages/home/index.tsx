import { BsCartPlus } from 'react-icons/bs'
import { useState, useEffect, useContext } from 'react'

import {api} from '../../services/api'
import { CartContext } from '../../context/CartContext'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

export interface ProductsProps{
  id: number;
  price: number;
  title: string;
  cover: string;
  description: string;
} 

export function Home(){
  const [products, setProducts] = useState<ProductsProps[]>([])
  const { addItemCart } =useContext(CartContext)

  useEffect(() => {
    async function getProducts() {
      try{
        const response = await api.get<ProductsProps[]>("/products")
      setProducts(response.data)
      } catch(error){
        console.log("erro ao buscar produtos", error)
      }
    }

    getProducts()
  }, [])

  function handleAddCartItem(products: ProductsProps) {
    
    addItemCart(products)
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5" >
          {products.map((products) => (
            <section key={products.id} className='w-full'>
              <Link to={`details/${products.id}`}>
            <img
              className='w-auto rounded-lg max-h-70 mb-2'
              src={products.cover}
              alt={products.title}/>
              </Link>
            <p className='font-medium mt-1 mb-2'>{products.title}</p>

            <div className='flex gap-3 items-center'>
              <strong className='text-zinc-700/90'>
                {products.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
              </strong>
              <button className='bg-zinc-900 p-1 rounded cursor-pointer' 
              onClick={ () => handleAddCartItem(products)}
              >
                <BsCartPlus size={20} color="#fff"/>
              </button>
            </div>
          </section>
          ))}
        </div>
      </main>
    </div>
  )
}