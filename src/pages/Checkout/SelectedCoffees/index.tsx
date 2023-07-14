import { useContext } from 'react'

import { CartContext } from '../../../contexts/CartContext'
import { SelectedCoffeesContainer, SelectedCoffeesWrapper } from './styles'
import { SelectedCoffeeCard } from '../SelectedCoffeeCard'
import { ConfirmOrder } from '../ConfirmOrder'

export function SelectedCoffees() {
  const { cart } = useContext(CartContext)

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>

      <SelectedCoffeesWrapper>
        {cart.length > 0 ? (
          <>
            {cart.map((coffee) => {
              return <SelectedCoffeeCard coffee={coffee} key={coffee.id} />
            })}
            <ConfirmOrder />
          </>
        ) : (
          <div>
            <p>Não há cafés selecionados</p>
          </div>
        )}
      </SelectedCoffeesWrapper>
    </SelectedCoffeesContainer>
  )
}
