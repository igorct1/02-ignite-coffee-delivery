import { Trash } from 'phosphor-react'
import { QuantityButton } from '../../../components/QuantityButton'
import { formatPrice } from '../../../utils/formatPrice'
import { useContext } from 'react'

import {
  RemoveButton,
  SelectedCoffeInfo,
  SelectedCoffeeCardContainer,
  SelectedCoffeePrice,
} from './styles'
import { CartContext, CartProps } from '../../../contexts/CartContext'

interface SelectedCoffeeCardProps {
  coffee: CartProps
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeeCardProps) {
  const { changeCoffeeQuantity, deleteCoffeeFromCart } = useContext(CartContext)
  const quantity = coffee.quantity

  const totalItemsPrice = formatPrice(quantity * coffee.price)

  function onIncrease() {
    changeCoffeeQuantity(coffee.id, { type: 'increase' })
  }

  function onDecrease() {
    changeCoffeeQuantity(coffee.id, { type: 'decrease' })
  }

  function handleDeleteFromCart() {
    deleteCoffeeFromCart(coffee.id)
  }

  return (
    <SelectedCoffeeCardContainer>
      <SelectedCoffeInfo>
        <img src={`./coffee-delivery/${coffee.photo}`} alt="" />
        <section>
          <p>{coffee.name}</p>
          <div>
            <QuantityButton
              quantity={quantity}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
            />
            <RemoveButton type="button" onClick={handleDeleteFromCart}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </div>
        </section>
      </SelectedCoffeInfo>

      <SelectedCoffeePrice>{totalItemsPrice}</SelectedCoffeePrice>
    </SelectedCoffeeCardContainer>
  )
}
