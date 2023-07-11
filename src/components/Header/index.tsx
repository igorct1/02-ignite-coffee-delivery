import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from '../Logo'
import {
  HeaderButtonCard,
  HeaderContainer,
  HeaderInfo,
  HeaderLocation,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderInfo>
        <HeaderLocation>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </HeaderLocation>

        <HeaderButtonCard>
          <ShoppingCart size={22} weight="fill" />
        </HeaderButtonCard>
      </HeaderInfo>
    </HeaderContainer>
  )
}
