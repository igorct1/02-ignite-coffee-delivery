import { createContext, ReactNode, useState } from 'react'
import { ICoffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

interface CartContextProps {
  cart: ICoffee[] | []
  addNewCoffeeToCart: (coffee: ICoffee) => void
  changeCoffeeQuantity: (
    quantity: number,
    type: 'increase' | 'decrease',
  ) => void
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

  function changeCoffeeQuantity(
    quantity: number,
    type: 'increase' | 'decrease',
  ) {
    console.log(quantity)
    console.log(type)
  }

  return (
    <CartContext.Provider
      value={{ cart, addNewCoffeeToCart, changeCoffeeQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
