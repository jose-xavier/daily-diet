import { TouchableProps } from 'react-native-svg'
import { Container, HeaderTitle, Subtitle, Title } from './styles'
import { ButtonIcon } from '@components/ButtonIcon'
import { useNavigation } from '@react-navigation/native'

type Props = TouchableProps & {
  inDiet?: boolean
  title: string
  type?: 'default' | 'statistic'
}

export function HeaderBackPage({ title, inDiet, type, ...rest }: Props) {
  const navigation = useNavigation()
  const statusColorDiet =
    inDiet === true ? 'GREEN' : inDiet === false ? 'RED' : 'GRAY'

  function hangleGoToHomePage() {
    navigation.navigate('home')
  }

  return (
    <Container color={statusColorDiet} type={type}>
      <ButtonIcon
        icon="arrow-left"
        {...rest}
        onPress={hangleGoToHomePage}
        type="RED"
      />
      <HeaderTitle>
        <Title type={type}>{title}</Title>
        {type === 'statistic' && (
          <Subtitle>das refeições dentro da dieta</Subtitle>
        )}
      </HeaderTitle>
    </Container>
  )
}
