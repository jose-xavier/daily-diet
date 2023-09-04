import { Container, Subtitle, Title } from './styles'

type Props = {
  value: number
  description: string
  color: 'GREEN' | 'RED' | 'GRAY'
}

export function Card({ value, color, description }: Props) {
  return (
    <Container color={color}>
      <Title>{value}</Title>
      <Subtitle>{description}</Subtitle>
    </Container>
  )
}
