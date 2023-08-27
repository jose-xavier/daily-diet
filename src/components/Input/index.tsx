import { TextInputProps } from 'react-native'
import { Container, ErrorText, InputText, Label } from './styles'

type Props = TextInputProps & {
  errorMessage?: string | null
  label: string
}

export function Input({ label, errorMessage, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText {...rest} />
      {errorMessage !== null && <ErrorText>{errorMessage}</ErrorText>}
    </Container>
  )
}
