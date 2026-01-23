import { type ReactNode, useState, createContext } from 'react'
import type { ProductsProps } from '../pages/home';

interface CartProviderProp{
  children: ReactNode
}

interface CartProps{
  id: number;
  price: number;
  total: number;
  amount: number;
  title: string;
  description: string;
  cover: string;
}

interface CartContextData{
cart: CartProps[];
cartAmount: number;
addItemCart: (newItem: ProductsProps) => void;
removeItemCart: (products: CartProps) => void;
total: string;
}


export const CartContext = createContext( {} as CartContextData)

function CartProvider( {children}: CartProviderProp){
  const [cart, setCart] = useState<CartProps[]>([])
  const [total, setTotal] = useState('')

function addOrIncrementItem(cart: ProductsProps[], newItem: ProductsProps): ProductsProps[] {
  const itemExists = cart.some(item => item.id === newItem.id)

  if (itemExists) {
    return cart.map(item => {
      if (item.id === newItem.id) {
        const amount = item.amount + 1
        return {
          ...item,
          amount,
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
  const updatedCart = addOrIncrementItem(cart, newItem)

  setCart(updatedCart)
  totalResultCart(updatedCart)
}



  function removeItemCart(products: CartProps){
    const item = cart.findIndex(item => item.id === products.id)

    if(cart[item]?.amount > 1){
      let cartList = cart;
      cartList[item].amount = cartList[item].amount -1;
      cartList[item].total = cartList[item].total - cartList[item].price;

      setCart(cartList)
      totalResultCart(cartList)
      return;
    }
    const removeItem = cart.filter(item => item.id !== products.id)
    setCart(removeItem)
    totalResultCart(removeItem)
  }

  function totalResultCart(items: CartProps[]){
    let myCart = items;
    let result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0)
    const resultFormat = result.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    setTotal(resultFormat)
  }

  return(
    <CartContext.Provider value={{
      cart,
      addItemCart,
      cartAmount: cart.length,
      removeItemCart,
      total,
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;