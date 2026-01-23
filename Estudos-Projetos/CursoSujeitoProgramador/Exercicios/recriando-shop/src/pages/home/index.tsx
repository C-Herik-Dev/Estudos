import { BsCartPlus } from 'react-icons/bs'
import { api } from '../../services/api'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export interface ProductsProps{
  id: number,
  price: number,
  title: string,
  description: string,
  cover: string;
  amount: number;
  total: number;
}

export function Home(){
  const [products, setProducts] = useState<ProductsProps[]>([])
  const { addItemCart } = useContext(CartContext)

  useEffect( () => {
    async function getProducts(){
      const response = await api.get("/products")
      setProducts(response.data)
    }

  getProducts()
  }, [])

  function handleAddItemCart(products: ProductsProps){
    addItemCart(products)
  }

  return(
    <div>
      <main className='w-full max-w-7xl px-4 mx-auto'>
        <h1 className="text-center font-bold text-2xl mb-4 mt-10">
           Produtos em alta
        </h1>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5'>
          {products.map( (products) => (
            <section 
            key={products.id}
            className='w-full'>
            <img 
              className='w-auto rounded-lg max-h-70 mb-2' 
              src={products.cover} 
              alt={products.title} 
            />
            <p className='font-medium mt-1 mb-2'>
              {products.title}
            </p>

            <div className='flex items-center gap-3'>
              <strong className='text-zinc-700/90'>
                {products.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}
              </strong>

              <button 
              onClick={ () => handleAddItemCart(products)}
              className='bg-zinc-900 p-1 rounded cursor-pointer'>
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