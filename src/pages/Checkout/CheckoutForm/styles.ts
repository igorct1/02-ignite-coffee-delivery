import { styled } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

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
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fontSizes['text-S']};

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
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

export const CheckoutFormPaymentMethods = styled(RadioGroup.Root)`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`

export const CheckoutFormPaymentItem = styled(RadioGroup.Item)`
  border: 0;

  display: flex;
  gap: 1.2rem;

  padding: 1.6rem;

  background: ${(props) => props.theme.colors['base-button']};

  border-radius: 6px;
  min-width: 180px;
  border: 1px solid transparent;

  cursor: pointer;
  transition: all 0.2s;

  &[data-state='checked'] {
    background: ${(props) => props.theme.colors['purple-light']};
    border: 1px solid ${(props) => props.theme.colors.purple};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  input {
    display: none;
  }

  label {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    text-transform: uppercase;

    span {
      color: ${(props) => props.theme.colors['base-text']};
      font-size: ${(props) => props.theme.fontSizes['button-M']};
    }
  }
`
