import { TouchableOpacityProps } from 'react-native'
import { Container, Status, StatusColor, Title } from './styles'

type Props = TouchableOpacityProps & {
  type: StatusColor
  title: string
}

export function ButtonSelect({ title, type, ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      <Status type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
