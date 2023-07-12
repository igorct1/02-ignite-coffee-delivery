import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddToCartButton,
  CoffeeCardContainer,
  CoffeeCardList,
  CoffeeCardPriceCart,
  CoffeeCardPriceContainer,
  QuantityButton,
} from './styles'

interface ICoffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

type CoffeeProps = {
  coffee: ICoffee
}
export function CoffeeCard({ coffee }: CoffeeProps) {
  return (
    <CoffeeCardContainer>
      <div>
        <img src={`./coffee-delivery/${coffee.photo}`} alt="" />
      </div>

      <CoffeeCardList>
        {coffee.tags.map((tag) => {
          return <li key={tag}>{tag}</li>
        })}
      </CoffeeCardList>

      <h3>{coffee.name}</h3>

      <p>{coffee.description}</p>

      <CoffeeCardPriceContainer>
        <p>
          R$ <span>9,90</span>
        </p>

        <CoffeeCardPriceCart>
          <QuantityButton>
            <button>
              <Minus />
            </button>
            <span>0</span>
            <button>
              <Plus />
            </button>
          </QuantityButton>

          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </CoffeeCardPriceCart>
      </CoffeeCardPriceContainer>
    </CoffeeCardContainer>
  )
}
