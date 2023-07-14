import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CheckoutFormAddress,
  CheckoutFormContainer,
  CheckoutFormInputs,
  CheckoutFormPayment,
  CheckoutFormPaymentMethods,
  CheckoutFormWrapper,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { InputForm } from '../../../components/InputForm'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function CheckoutForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType

  function handleClickInput({
    currentTarget,
  }: {
    currentTarget: HTMLLabelElement
  }) {
    const labels = document.querySelectorAll('label')

    labels.forEach((label) => label.classList.remove('selected'))

    if (!currentTarget.classList.contains('selected')) {
      currentTarget.classList.add('selected')
    }
  }

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
          <InputForm placeholder="CEP" type="cep" error={errors.cep?.message} />
          <InputForm
            placeholder="Rua"
            type="street"
            error={errors.street?.message}
          />
          <InputForm
            placeholder="Número"
            type="number"
            error={errors.number?.message}
          />
          <InputForm
            placeholder="Complemento"
            type="complement"
            error={errors.complement?.message}
          />
          <InputForm
            placeholder="Bairro"
            type="district"
            error={errors.district?.message}
          />

          <InputForm
            placeholder="Cidade"
            type="city"
            error={errors.city?.message}
          />
          <InputForm placeholder="UF" type="uf" error={errors.uf?.message} />
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
          <label htmlFor="credit" onClick={handleClickInput}>
            <input
              type="radio"
              placeholder="CARTÃO DE CRÉDITO"
              id="credit"
              value="Cart'~ao de Crédito"
              {...register('payment')}
            />
            <CreditCard />
            <span>CARTÃO DE CRÉDITO</span>
          </label>
          <label htmlFor="debit" onClick={handleClickInput}>
            <input
              type="radio"
              placeholder="CARTÃO DE CRÉDITO"
              id="debit"
              value="Cartão de Débito"
              {...register('payment')}
            />
            <Bank />
            <span>CARTÃO DE DÉBITO</span>
          </label>
          <label htmlFor="money" onClick={handleClickInput}>
            <input
              type="radio"
              placeholder="DINHEIRO"
              id="money"
              value="Dinheiro"
              {...register('payment')}
            />
            <Money />
            <span>DINHEIRO</span>
          </label>
        </CheckoutFormPaymentMethods>
      </CheckoutFormPayment>
    </CheckoutFormContainer>
  )
}
