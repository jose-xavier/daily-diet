import { TouchableProps } from 'react-native-svg'
import { Container, Title } from './styles'
import { ButtonIcon } from '@components/ButtonIcon'

type Props = TouchableProps & {
  title: string
}

export function HeaderBackPage({ title, ...rest }: Props) {
  return (
    <Container>
      <ButtonIcon icon="arrow-left" {...rest} />
      <Title>{title}</Title>
    </Container>
  )
}
