import { CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CheckoutFormAddress,
  CheckoutFormContainer,
  CheckoutFormInputs,
  CheckoutFormPayment,
  CheckoutFormPaymentMethods,
  CheckoutFormWrapper,
} from './styles'

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <h3>Complete seu pedido</h3>
      <CheckoutFormWrapper>
        <CheckoutFormAddress>
          <MapPin size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </CheckoutFormAddress>
        <CheckoutFormInputs>
          <input type="text" placeholder="CEP" className="cep" />
          <input type="text" placeholder="Rua" className="rua" />
          <input type="text" placeholder="Número" />
          <input
            type="text"
            placeholder="Complemento"
            className="complemento"
          />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </CheckoutFormInputs>
      </CheckoutFormWrapper>
      <CheckoutFormPayment>
        <div>
          <CurrencyDollar size={22} />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
        <CheckoutFormPaymentMethods>
          <label htmlFor="credit">
            <input
              type="radio"
              placeholder="CARTÃO DE CRÉDITO"
              name="credit"
              id="credit"
            />
            <Money />
            <span>CARTÃO DE CRÉDITO</span>
          </label>
          <label htmlFor="debit">
            <input
              type="radio"
              placeholder="CARTÃO DE CRÉDITO"
              name="debit"
              id="debit"
            />
            <Money />
            <span>CARTÃO DE DÉBITO</span>
          </label>
          <label htmlFor="money">
            <input
              type="radio"
              placeholder="DINHEIRO"
              name="money"
              id="money"
            />
            <Money />
            <span>DINHEIRO</span>
          </label>
        </CheckoutFormPaymentMethods>
      </CheckoutFormPayment>
    </CheckoutFormContainer>
  )
}
