import { createContext, useState } from "react";
import { type ProductsProps } from '../pages/home'
import { type ReactNode } from 'react'

interface CartProps {
  id: number;
  price: number;
  total: number;
  amount: number;
  title: string;
  description: string;
  cover: string;
}

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductsProps) => void;
  removeItemCart: (newItem: ProductsProps) => void;
  total: string;
}

interface CartProviderProps {
  children: ReactNode;
}


export const CartContext = createContext( {} as CartContextData)

function CartProvider ({children}: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [total, setTotal] = useState('')

  function addIncrementItem(cart: ProductsProps[], newItem: ProductsProps): ProductsProps[]{
    const itemIndex = cart.some(item => item.id === newItem.id)

    if(itemIndex){
      return cart.map(item => {
        if(item.id === newItem.id){
          const amount = item.amount + 1
          return {
            ...item,
            amount: amount,
            total: amount * item.price
          }
        }
        return item
      })
    }
    return [
      ...cart,
      {
        ...newItem,
        amount: 1,
        total: newItem.price
      }
    ]
  }

  function addItemCart(newItem: ProductsProps) {
    const updateCart = addIncrementItem(cart, newItem)
    setCart(updateCart)
    totalResultCart(updateCart)
  }

  function removeItemCart(product: CartProps){
    const item = cart.findIndex(item => item.id === product.id)

    if(cart[item]?.amount > 1){
      const myCart = cart;
      myCart[item].amount = myCart[item].amount -1
      myCart[item].total = myCart[item].total - myCart[item].price

      setCart(myCart)
      totalResultCart(myCart)
      return
    }
      const removeItem = cart.filter(item => item.id !== product.id)
      setCart(removeItem)
      totalResultCart(removeItem)
    }

    function totalResultCart(items: CartProps[]) {
      let myCart = items;
      let result = myCart.reduce((valor, item) => {return valor + item.total}, 0)
      const resultFormat = result.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
      setTotal(resultFormat)
    }
    
  return (
    <CartContext.Provider value={{
      cart,
      cartAmount: cart.length,
      addItemCart,
      removeItemCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;