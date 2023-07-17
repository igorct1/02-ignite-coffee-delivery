import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CheckoutFormAddress,
  CheckoutFormContainer,
  CheckoutFormInputs,
  CheckoutFormPayment,
  CheckoutFormPaymentItem,
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
          <CheckoutFormPaymentItem value="Crédito">
            <label htmlFor="v1">
              <input
                id="v1"
                type="radio"
                value="Cartão de Crédito"
                {...register('payment')}
              />
              <CreditCard />
              <span>Cartão de Crédito</span>
            </label>
          </CheckoutFormPaymentItem>

          <CheckoutFormPaymentItem value="Débito">
            <label htmlFor="v2">
              <input
                id="v2"
                type="radio"
                value="Cartão de Débito"
                {...register('payment')}
              />
              <Bank />
              <span>Cartão de Débito</span>
            </label>
          </CheckoutFormPaymentItem>

          <CheckoutFormPaymentItem value="Dinheiro">
            <label htmlFor="v3">
              <input
                id="v3"
                type="radio"
                value="Dinheiro"
                {...register('payment')}
              />
              <Money />
              <span>Dinheiro</span>
            </label>
          </CheckoutFormPaymentItem>
        </CheckoutFormPaymentMethods>
      </CheckoutFormPayment>
    </CheckoutFormContainer>
  )
}
