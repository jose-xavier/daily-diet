import { useState } from 'react'
import { SectionList, Text } from 'react-native'

import { Header } from '@components/Header'
import { Porcent } from '@components/Porcent'
import { Button } from '@components/Button'
import { Meal } from '@components/Meal'

import { MealDTO } from '@components/dtos/MealDTO'

import moment from 'moment'

import { Container, Title } from './styles'
import { useTheme } from 'styled-components/native'
import { ListEmpty } from '@components/ListEmpty'

type MealItem = {
  title: string
  data: MealDTO[]
}

export function Home() {
  const data = [
    {
      title: '2023-08-13T12:34:56.789Z',
      data: [
        {
          id: '1',
          name: 'X-Tudo',
          description: 'fora da dieta',
          date: '2023-08-13T12:34:56.789Z',
          isDiet: false,
        },
        {
          id: '2023-08-13T12:34:56.789Z',
          name: 'pizza',
          description: 'fora da dieta',
          date: '2023-08-13T12:34:56.789Z',
          isDiet: false,
        },
      ],
    },
    {
      title: '2023-08-13T12:34:56.789Z',
      data: [
        {
          id: '2',
          name: 'Salada cesar com frango grelhado',
          description: 'dentro da dieta',
          date: '2023-08-13T12:34:56.789Z',
          isDiet: true,
        },
      ],
    },
  ]

  const [meals, setMeals] = useState<MealItem[]>(data)
  const { FONT_SIZE } = useTheme()

  return (
    <Container>
      <Header />

      <Porcent subtitle="das refeições dentro da dieta" porcent={67} />

      <Text style={{ fontSize: FONT_SIZE.LG }}>Refeições</Text>

      <Button title="Nova refeição" icon="plus" color="GRAY" />

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Meal key={item.id} item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Title>{moment(title).format('DD.MM.YY')}</Title>
        )}
        contentContainerStyle={
          meals.length === 0 && {
            flex: 1,
          }
        }
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira refeição?" />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
