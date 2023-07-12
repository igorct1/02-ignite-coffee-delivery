import { styled } from 'styled-components'

export const CoffeesSection = styled.section`
  h2 {
    font-size: ${(props) => props.theme.fontSizes['title-L']};
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: ${(props) => props.theme.fonts.title};
    padding: 0rem 0rem 5.4rem;
  }
`

export const CoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 3.2rem;
`
