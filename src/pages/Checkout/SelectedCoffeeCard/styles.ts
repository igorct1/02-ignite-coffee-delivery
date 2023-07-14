import { styled } from 'styled-components'

export const SelectedCoffeeCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding: 2rem 0rem;

  > div {
    display: flex;
  }

  img {
    width: 64px;
    height: 64px;
  }

  &:first-child {
    padding-top: 0rem;
    padding-bottom: 2rem;
  }
`

export const SelectedCoffeInfo = styled.div`
  display: flex;
  gap: 2rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
      display: flex;
      gap: 0.8rem;
    }
  }
`

export const SelectedCoffeePrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes['text-M']};
  color: ${(props) => props.theme.colors['base-text']};
  font-weight: bold;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  border: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors['base-button']};

  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.fontSizes['button-M']};
  font-weight: 700;

  text-transform: uppercase;

  padding: 0.8rem;
`
