import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesContainer, CoffeesSection } from './styles'

export function Coffees() {
  return (
    <CoffeesSection>
      <h2>Nossos cafés</h2>
      <CoffeesContainer>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </CoffeesContainer>
    </CoffeesSection>
  )
}
