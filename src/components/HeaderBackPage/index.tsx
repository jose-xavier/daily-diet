import { Container, Title } from './styles'
import { ButtonIcon } from '@components/ButtonIcon'

type Props = {
  title: string
}

export function HeaderBackPage({ title }: Props) {
  return (
    <Container>
      <ButtonIcon icon="arrow-left" />
      <Title>{title}</Title>
    </Container>
  )
}
