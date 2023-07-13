import { styled } from 'styled-components'

export const ConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2.4rem;

  p {
    font-size: ${(props) => props.theme.fontSizes['text-M']};
    color: ${(props) => props.theme.colors['base-text']};
  }

  strong {
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes['text-L']};

    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p,
  strong {
    display: flex;
    justify-content: space-between;
  }

  button {
    border: 0;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.yellow};
    text-align: center;
    padding: 1.2rem;
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSizes['button-G']};
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};

    margin-top: 2rem;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
`
