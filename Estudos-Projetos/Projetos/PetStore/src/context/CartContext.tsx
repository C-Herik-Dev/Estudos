import { createContext, type ReactNode, useState, useMemo } from "react";
import type { ProductsProps } from "../pages/home";
import toast from "react-hot-toast";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: CartProps[];
  totalResultCart: string;
  cartAmount: number;
  addItemCart: (newItem: ProductsProps) => void;
  removeItemCart: (newItem: ProductsProps) => void;
  removeTotal: (product: CartProps) => void;
  clearCart: () => void;
}

interface CartProps {
  id: number;
  price: number;
  total: number;
  amount: number;
  title: string;
  description: string;
  cover: string;
}
export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function clearCart() {
    setCart([]);
  }

  function addItemCart(newItem: ProductsProps) {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === newItem.id);

      if (itemIndex !== -1) {
        const newCart = prevCart.map((item) => {
          if (item.id === newItem.id) {
            const amount = item.amount + 1;
            return {
              ...item,
              amount,
              total: amount * item.price,
            };
          }
          return item;
        });

        return newCart;
      }

      const data = {
        ...newItem,
        amount: 1,
        total: newItem.price,
      };

      toast.success("Produto adicionado no carrinho.");
      return [...prevCart, data];
    });
  }

  function removeItemCart(product: CartProps) {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === product.id);

      if (!item) return prevCart;

      if (item.amount > 1) {
        return prevCart.map((i) => {
          if (i.id === product.id) {
            const amount = i.amount - 1;
            return {
              ...i,
              amount,
              total: amount * i.price,
            };
          }
          return i;
        });
      }

      return prevCart.filter((item) => item.id !== product.id);
    });
  }

  const totalResultCart = useMemo(() => {
    const result = cart.reduce((valor, item) => {
      return valor + item.total;
    }, 0);
    return result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }, [cart]);

  function removeTotal(product: CartProps) {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalResultCart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        removeTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
