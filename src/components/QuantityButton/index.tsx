import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface QuantityButtonProps {
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityButton({
  onIncrease,
  onDecrease,
}: QuantityButtonProps) {
  const { cart } = useContext(CartContext)

  return (
    <QuantityButtonContainer>
      <button onClick={onDecrease}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{cart.length}</span>
      <button onClick={onIncrease}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityButtonContainer>
  )
}
