import { createContext, ReactNode, useState } from 'react'
import { ICoffee } from '../pages/Home/components/CoffeeCard'

interface CartContextProps {
  cart: ICoffee[] | []
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  )
}
