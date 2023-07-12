import { createContext, ReactNode, useState } from 'react'
import { ICoffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

interface CartContextProps {
  cart: ICoffee[] | []
  addNewCoffeeToCart: (coffee: ICoffee) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ICoffee[]>([])

  function addNewCoffeeToCart(coffee: ICoffee) {
    setCart((state) => {
      return produce(state, (draft) => {
        draft.push(coffee)
      })
    })
  }

  return (
    <CartContext.Provider value={{ cart, addNewCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
