import { ButtonIcon } from '@components/ButtonIcon'
import { Container, Subtitle, Title } from './styles'
import { StatusColor } from '@components/ButtonIcon/styles'

type Props = {
  subtitle: string
  porcent: number
}

export function Porcent({ porcent, subtitle }: Props) {
  const type: StatusColor = porcent >= 65 ? 'GREEN' : 'RED'

  return (
    <Container type={type}>
      <ButtonIcon icon="arrow-up-right" type={type} />
      <Title>{porcent}%</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
