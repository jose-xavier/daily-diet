import { Header } from '@components/Header'
import { Container } from './styles'
import { Porcent } from '@components/Porcent'
import { Button } from '@components/Button'

export function Home() {
  return (
    <Container>
      <Header />
      <Porcent subtitle="das refeições dentro da dieta" porcent={67} />
      <Button title="Nova refeição" icon="plus" color="GRAY" />
    </Container>
  )
}
