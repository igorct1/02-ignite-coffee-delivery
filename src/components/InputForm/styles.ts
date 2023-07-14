import { styled } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border-radius: 4px;

    border: 1px solid ${(props) => props.theme.colors['base-button']};

    padding: 1.2rem;

    font-size: ${(props) => props.theme.fontSizes['text-S']};
    color: ${(props) => props.theme.colors['base-label']};

    background-color: ${(props) => props.theme.colors['base-input']};

    outline: none;
  }

  &.cep {
    max-width: 20rem;
    grid-column: span 3;
  }

  &.street {
    grid-column: span 3;
  }

  &.complement {
    grid-column: span 2;
  }

  p {
    margin-top: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes['text-S']};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`
