import { useLocation, useNavigate } from 'react-router-dom'
import { ConfirmOrderDataProps } from '../Checkout'
import { useEffect } from 'react'
import {
  SuccessContainer,
  SuccessIcon,
  SuccessInfo,
  SuccessInfoCard,
  SuccessInfoContainer,
  SuccessInfoIllustration,
  SuccessText,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/Illustration.png'

interface LocationType {
  state: ConfirmOrderDataProps
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return null

  return (
    <SuccessContainer>
      <SuccessText>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessText>
      <SuccessInfoContainer>
        <SuccessInfo>
          <SuccessInfoCard>
            <SuccessIcon color="purple">
              <MapPin size={16} />
            </SuccessIcon>
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {state.street}, {state.number}
                </span>
              </p>
              <p>
                {state.city} - {state.uf}
              </p>
            </div>
          </SuccessInfoCard>
          <SuccessInfoCard>
            <SuccessIcon color="yellow">
              <Timer size={16} />
            </SuccessIcon>
            <div>
              <p>Previsão de entrega</p>
              <span>20min - 30min</span>
            </div>
          </SuccessInfoCard>
          <SuccessInfoCard>
            <SuccessIcon color="yellow-dark">
              <CurrencyDollar size={16} />
            </SuccessIcon>
            <div>
              <p>Pagamento na entrega</p>
              <span>{state.payment}</span>
            </div>
          </SuccessInfoCard>
        </SuccessInfo>

        <SuccessInfoIllustration>
          <img src={illustration} alt="" />
        </SuccessInfoIllustration>
      </SuccessInfoContainer>
    </SuccessContainer>
  )
}
