import { HeaderBackPage } from '@components/HeaderBackPage'
import { Container, Content, Title, Row } from './styles'
import { Card } from '@components/Card'
import { MealContext } from '../../context/MealContext'
import { useCallback, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native'

export function Statistic() {
  const { meals, fetchMeals, sumaryMeals } = useContext(MealContext)

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [meals]),
  )

  return (
    <Container>
      <HeaderBackPage title="30,21%" inDiet={false} type="statistic" />
      <Content>
        <Title>Estatísticas gerais</Title>
        <Card
          value={sumaryMeals.total}
          description="melhor sequência de pratos dentro da dieta"
          color="GRAY"
        />
        <Card
          value={sumaryMeals.total}
          description="refeições registradas"
          color="GRAY"
        />

        <Row>
          <Card
            value={sumaryMeals.inDiet}
            description="refeições dentro da dieta"
            color="GREEN"
          />
          <Card
            value={sumaryMeals.offDiet}
            description="refeições fora da dieta"
            color="RED"
          />
        </Row>
      </Content>
    </Container>
  )
}
