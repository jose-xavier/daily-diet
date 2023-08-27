import { PressableProps } from 'react-native'
import { ButtonSelectStyleProps, Container, Status, Title } from './styles'

type Props = PressableProps & ButtonSelectStyleProps

export function ButtonSelect({ ...props }: Props) {
  return (
    <Container {...props}>
      <Status color={props.color} title={props.title} />
      <Title>{props.title}</Title>
    </Container>
  )
}
