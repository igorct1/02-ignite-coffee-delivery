import { styled } from 'styled-components'

export const CheckoutFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CheckoutFormWrapper = styled.div`
  padding: 4rem;

  background: ${(props) => props.theme.colors['base-card']};

  border-radius: 8px;
`

export const CheckoutFormAddress = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  > div {
    display: flex;
    flex-direction: column;
    p {
      font-size: ${(props) => props.theme.fontSizes['text-M']};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    span {
      font-size: ${(props) => props.theme.fontSizes['text-S']};
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`

export const CheckoutFormInputs = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 1.2rem;

  input {
    border-radius: 4px;

    border: 1px solid ${(props) => props.theme.colors['base-button']};

    padding: 1.2rem;

    font-size: ${(props) => props.theme.fontSizes['text-S']};
    color: ${(props) => props.theme.colors['base-label']};

    background-color: ${(props) => props.theme.colors['base-input']};

    outline: none;

    &.cep {
      max-width: 20rem;
      grid-column: span 3;
    }

    &.rua {
      max-width: 100%;
      grid-column: span 3;
    }

    &.complemento {
      grid-column: span 2;
    }
  }
`

export const CheckoutFormPayment = styled.div`
  padding: 4rem;

  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  background: ${(props) => props.theme.colors['base-card']};

  border-radius: 8px;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  > div {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 3.2rem;

    p {
      font-size: ${(props) => props.theme.fontSizes['text-M']};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    span {
      font-size: ${(props) => props.theme.fontSizes['text-S']};
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`

export const CheckoutFormPaymentMethods = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  label {
    display: flex;
    gap: 1.2rem;
    padding: 1.6rem;
    width: 180px;
    align-items: center;
    border-radius: 8px;
    background: ${(props) => props.theme.colors['base-button']};
    cursor: pointer;

    input {
      display: NONE;
    }

    span {
      font-size: ${(props) => props.theme.fontSizes['text-XS']};
    }
  }
`
