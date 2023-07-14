import { InputContainer } from './styles'
import { useFormContext } from 'react-hook-form'
interface InputFormProps {
  placeholder: string
  error: string
  type?: string
}

export function InputForm({ placeholder, error, type }: InputFormProps) {
  const { register } = useFormContext()

  return (
    <InputContainer className={type}>
      <input placeholder={placeholder} {...register(`${type}`)} />
      {error && <p>{error}</p>}
    </InputContainer>
  )
}
