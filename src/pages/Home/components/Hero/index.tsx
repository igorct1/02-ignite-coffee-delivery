import {
  HeroContainer,
  HeroInfo,
  HeroInfoList,
  HeroInfoText,
  HeroListItem,
} from './styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import heroImg from '../../../../assets/hero-img.png'

export function Hero() {
  return (
    <HeroContainer>
      <HeroInfo>
        <HeroInfoText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HeroInfoText>
        <HeroInfoList>
          <HeroListItem color="yellow-dark">
            <span>
              <ShoppingCart weight="fill" size={16} />
            </span>
            <p>Compra simples e segura</p>
          </HeroListItem>
          <HeroListItem color="black">
            <span>
              <Package weight="fill" size={16} />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </HeroListItem>
          <HeroListItem color="yellow">
            <span>
              <Timer weight="fill" size={16} />
            </span>
            <p>Entrega rápida e rastreada</p>
          </HeroListItem>
          <HeroListItem color="purple">
            <span>
              <Coffee weight="fill" size={16} />
            </span>
            <p>O café chega fresquinho até você</p>
          </HeroListItem>
        </HeroInfoList>
      </HeroInfo>

      <div>
        <img src={heroImg} alt="" />
      </div>
    </HeroContainer>
  )
}
