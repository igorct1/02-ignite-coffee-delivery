import { styled } from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SelectedCoffeesWrapper = styled.div`
  padding: 4rem;

  background: ${(props) => props.theme.colors['base-card']};

  border-radius: 8px 36px 8px 36px;
`
