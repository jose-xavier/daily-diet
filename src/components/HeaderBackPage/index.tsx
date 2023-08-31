import { TouchableProps } from 'react-native-svg'
import { Container, Title } from './styles'
import { ButtonIcon } from '@components/ButtonIcon'
import { useNavigation } from '@react-navigation/native'

type Props = TouchableProps & {
  inDiet?: boolean
  title: string
}

export function HeaderBackPage({ title, inDiet, ...rest }: Props) {
  const navigation = useNavigation()
  const statusColorDiet =
    inDiet === true ? 'GREEN' : inDiet === false ? 'RED' : 'GRAY'

  function hangleGoToHomePage() {
    navigation.navigate('home')
  }

  return (
    <Container color={statusColorDiet}>
      <ButtonIcon icon="arrow-left" {...rest} onPress={hangleGoToHomePage} />
      <Title>{title}</Title>
    </Container>
  )
}
