import { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Container, Icon, StatusColor } from './styles'

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap
  type?: StatusColor
}

export function ButtonIcon({ icon, type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
