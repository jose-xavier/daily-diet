/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext } from 'react'
import { SectionList, Text } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import _ from 'lodash'
import { MealContext } from '../../context/MealContext'
import { format, parse } from 'date-fns'
import { mealGetById } from '@storage/meal/mealGetById'

import { Header } from '@components/Header'
import { Porcent } from '@components/Porcent'
import { Button } from '@components/Button'
import { Meal } from '@components/Meal'
import { useTheme } from 'styled-components/native'
import { ListEmpty } from '@components/ListEmpty'
import { MealDTO } from '@components/dtos/MealDTO'

import { Container, Title } from './styles'

type MealItem = {
  title: string
  data: MealDTO[]
}

export function Home() {
  const { meals, fetchMeals, sumaryMeals } = useContext(MealContext)
  const { FONT_SIZE } = useTheme()
  const navigation = useNavigation()

  function handleGoToRegisterPage() {
    navigation.navigate('register')
  }

  async function handleGoToDetailsPage(id: string | number[]) {
    const meal = await mealGetById(id)
    navigation.navigate('details', { meal })
  }

  const mealsHistory = meals.reduce((acc: MealItem[], meal) => {
    const mealDate = new Date(meal.date)
    const formattedDate = format(mealDate, 'dd.MM.yy')

    const mealIndex = acc.findIndex((meal) => meal.title === formattedDate)

    if (mealIndex !== -1) {
      acc[mealIndex].data.push({
        id: meal.id,
        name: meal.name,
        description: meal.description,
        date: meal.date,
        inDiet: meal.inDiet,
      })
    } else {
      acc.push({
        title: formattedDate,
        data: [
          {
            id: meal.id,
            name: meal.name,
            description: meal.description,
            date: meal.date,
            inDiet: meal.inDiet,
          },
        ],
      })
    }

    return acc
  }, [])

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [meals]),
  )

  const formatDate = (dateString: string) =>
    format(parse(dateString, 'dd.MM.yy', new Date()), 'dd.MM.yy')

  return (
    <Container>
      <Header />

      <Porcent
        subtitle="das refeições dentro da dieta"
        porcent={sumaryMeals.porcent}
      />

      <Text style={{ fontSize: FONT_SIZE.LG }}>Refeições</Text>

      <Button
        title="Nova refeição"
        icon="plus"
        color="GRAY"
        onPress={handleGoToRegisterPage}
      />

      <SectionList
        sections={mealsHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Meal item={item} onPress={() => handleGoToDetailsPage(item.id)} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Title>{formatDate(title)}</Title>
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
