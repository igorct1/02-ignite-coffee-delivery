import { useContext } from 'react'

import { CartContext } from '../../../contexts/CartContext'
import { SelectedCoffeesContainer, SelectedCoffeesWrapper } from './styles'

export function SelectedCoffees() {
  const { cart } = useContext(CartContext)

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>

      <SelectedCoffeesWrapper>
        {cart.length > 0 ? (
          <p>cafés selecionados: </p>
        ) : (
          <p>Não há cafés selecionados.</p>
        )}
      </SelectedCoffeesWrapper>
    </SelectedCoffeesContainer>
  )
}
