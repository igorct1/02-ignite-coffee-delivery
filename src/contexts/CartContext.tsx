import { createContext, ReactNode, useState } from 'react'
import { ICoffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

interface CartContextProps {
  cart: ICoffee[] | []
  cartTotalPrice: number
  changeCoffeeQuantity: (
    coffeeId: number,
    changeType: { type: 'increase' | 'decrease' },
  ) => void
  addNewCoffeeToCart: (coffee: ICoffee) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ICoffee[]>([])

  const cartTotalPrice = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price
  }, 0)

  function addNewCoffeeToCart(coffee: ICoffee) {
    setCart((state) => {
      return produce(state, (draft) => {
        draft.push(coffee)
      })
    })
  }

  function changeCoffeeQuantity(
    coffeId: number,
    changeType: { type: 'increase' | 'decrease' },
  ) {
    const { type } = changeType

    const newCartList = produce(cart, (draft) => {
      const coffeeExists = cart.findIndex((coffee) => coffee.id === coffeId)

      if (coffeeExists >= 0) {
        const item = draft[coffeeExists]
        draft[coffeeExists].quantity =
          type === 'increase'
            ? item.quantity + 1
            : item.quantity > 1
            ? item.quantity - 1
            : item.quantity
      }
    })

    setCart(newCartList)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotalPrice,
        addNewCoffeeToCart,
        changeCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
