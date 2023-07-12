import { styled } from 'styled-components'

export const QuantityButtonContainer = styled.div`
  background: ${(props) => props.theme.colors['base-button']};
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  border-radius: 8px;

  button {
    border: 0;
    background: none;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.colors.purple};

      &:hover {
        color: ${(props) => props.theme.colors['purple-dark']};
      }
    }
  }
`
