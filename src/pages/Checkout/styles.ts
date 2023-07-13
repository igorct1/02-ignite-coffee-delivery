import { styled } from 'styled-components'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 640px 448px;
  gap: 3.2rem;

  h3 {
    font-size: ${(props) => props.theme.fontSizes['title-XS']};
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: ${(props) => props.theme.fonts.title};
  }
`
