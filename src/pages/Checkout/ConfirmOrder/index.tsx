import { CartContext } from '../../../contexts/CartContext'
import { formatPrice } from '../../../utils/formatPrice'
import { ConfirmOrderContainer } from './styles'
import { useContext } from 'react'
export function ConfirmOrder() {
  const { cartTotalPrice } = useContext(CartContext)

  const cartTotalPricePlusTax = cartTotalPrice + 3.5

  return (
    <ConfirmOrderContainer>
      <p>
        Total de itens: <span>{formatPrice(cartTotalPrice)}</span>
      </p>
      <p>
        Entrega: <span>R$ 3,50</span>
      </p>
      <strong>
        Total: <span>{formatPrice(cartTotalPricePlusTax)}</span>
      </strong>
      <button type="submit">Confirmar pedido</button>
    </ConfirmOrderContainer>
  )
}
