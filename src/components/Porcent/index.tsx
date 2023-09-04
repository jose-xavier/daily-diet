import { ButtonIcon } from '@components/ButtonIcon'
import { Container, Subtitle, Title } from './styles'
import { StatusColor } from '@components/ButtonIcon/styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
  subtitle: string
  porcent: number
}

export function Porcent({ porcent, subtitle }: Props) {
  const navigation = useNavigation()

  const type: StatusColor = porcent >= 65 ? 'GREEN' : 'RED'

  function handleGoToStatisticPage() {
    navigation.navigate('statistic')
  }

  return (
    <Container type={type}>
      <ButtonIcon
        icon="arrow-up-right"
        type={type}
        onPress={handleGoToStatisticPage}
      />
      <Title>{porcent}%</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
