import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './styles'

interface QuantityButtonProps {
  quantity?: number
  onIncrease?: () => void
  onDecrease?: () => void
}

export function QuantityButton({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityButtonProps) {
  return (
    <QuantityButtonContainer>
      <button onClick={onDecrease} type="button">
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease} type="button">
        <Plus size={14} weight="bold" />
      </button>
    </QuantityButtonContainer>
  )
}
