import { useLocation } from 'react-router-dom'
import { ConfirmOrderDataProps } from '../Checkout'

interface LocationType {
  state: ConfirmOrderDataProps
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  console.log(state)

  return <div>Success</div>
}
