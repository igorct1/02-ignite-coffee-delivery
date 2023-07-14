import { CheckoutForm } from './CheckoutForm'
import { SelectedCoffees } from './SelectedCoffees'
import { CheckoutContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import * as zod from 'zod'

const confirmFormOrderSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  payment: zod.string(),
})

export type ConfirmOrderDataProps = zod.infer<typeof confirmFormOrderSchema>

export function Checkout() {
  const confirmFormOrder = useForm<ConfirmOrderDataProps>({
    resolver: zodResolver(confirmFormOrderSchema),
    defaultValues: {
      payment: 'Cartão de Crédite',
    },
  })

  const { clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const { handleSubmit } = confirmFormOrder

  function handleConfirmFormOrder(data: ConfirmOrderDataProps) {
    navigate('/success', { state: data })
    clearCart()
  }

  return (
    <FormProvider {...confirmFormOrder}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmFormOrder)}>
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}
