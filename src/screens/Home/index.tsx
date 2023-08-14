import { Header } from '@components/Header'
import { Container } from './styles'
import { Porcent } from '@components/Porcent'

export function Home() {
  return (
    <Container>
      <Header />
      <Porcent subtitle="das refeições dentro da dieta" porcent={67} />
    </Container>
  )
}
