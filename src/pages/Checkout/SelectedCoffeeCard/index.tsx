import { Trash } from 'phosphor-react'
import { QuantityButton } from '../../../components/QuantityButton'
import { formatPrice } from '../../../utils/formatPrice'
import { ICoffee } from '../../Home/components/CoffeeCard'
import { useContext } from 'react'

import {
  RemoveButton,
  SelectedCoffeInfo,
  SelectedCoffeeCardContainer,
  SelectedCoffeePrice,
} from './styles'
import { CartContext } from '../../../contexts/CartContext'

interface SelectedCoffeCardProps {
  coffee: ICoffee
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeCardProps) {
  const { changeCoffeeQuantity } = useContext(CartContext)
  const quantity = coffee.quantity

  const totalItemsPrice = formatPrice(quantity * coffee.price)

  function onIncrease() {
    changeCoffeeQuantity(coffee.id, { type: 'increase' })
  }

  function onDecrease() {
    changeCoffeeQuantity(coffee.id, { type: 'decrease' })
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
            <RemoveButton type="button">
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
