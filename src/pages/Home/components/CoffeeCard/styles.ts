import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem;
  align-items: center;
  background-color: ${(props) => props.theme.colors['base-card']};

  border-radius: 8px 36px 8px 36px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -50px;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes['title-S']};
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 700;
  }

  p {
    max-width: 220px;
    padding-top: 0.8rem;

    font-size: ${(props) => props.theme.fontSizes['text-S']};
    color: ${(props) => props.theme.colors['base-label']};
    text-align: center;
  }
`
export const CoffeeCardList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin: 1.2rem 0rem 1.6rem;

  li {
    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: ${(props) => props.theme.fontSizes.tag};
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 8px;
    padding: 0.6rem;
  }
`

export const CoffeeCardPriceContainer = styled.div`
  padding-top: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${(props) => props.theme.colors['base-text']};

    span {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: ${(props) => props.theme.fontSizes['title-M']};
    }
  }
`

export const CoffeeCardPriceCart = styled.div`
  display: flex;
  gap: 1rem;

  input {
    width: 30px;
  }
`

export const AddToCartButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  border: 0;
  background: none;
  display: flex;
  align-items: center;

  border-radius: 8px;

  background-color: ${(props) => props.theme.colors['purple-dark']};
  padding: 0.8rem;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
  }
`
