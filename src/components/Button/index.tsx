import { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ButtonTypeStyleProps, Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  icon?: keyof typeof Feather.glyphMap
  color: ButtonTypeStyleProps
}

export function Button({ title, color, icon, ...rest }: Props) {
  return (
    <Container type={color} {...rest}>
      {<Icon name={icon} type={color} />}
      <Title type={color}>{title}</Title>
    </Container>
  )
}
