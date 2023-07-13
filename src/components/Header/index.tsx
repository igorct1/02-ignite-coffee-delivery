import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from '../Logo'
import {
  HeaderButtonCard,
  HeaderContainer,
  HeaderInfo,
  HeaderLocation,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <a href="/">
        <Logo />
      </a>
      <HeaderInfo>
        <HeaderLocation>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </HeaderLocation>

        <Link to="/checkout">
          <HeaderButtonCard>
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 && (
              <div>
                <span>{cart.length}</span>
              </div>
            )}
          </HeaderButtonCard>
        </Link>
      </HeaderInfo>
    </HeaderContainer>
  )
}
