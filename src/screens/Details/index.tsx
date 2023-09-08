import { useNavigation, useRoute } from '@react-navigation/native'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { MealDTO } from 'src/dtos/MealDTO'
import { Button } from '@components/Button'
import { HeaderBackPage } from '@components/HeaderBackPage'

import {
  ButtonsWrapper,
  Container,
  Content,
  MealInfoWrapper,
  Status,
  SubTitle,
  Tag,
  TextDiet,
  TextName,
  Title,
} from './styles'
import { mealRemove } from '@storage/meal/meallRemove'
import { Alert } from 'react-native'
import { mealGetById } from '@storage/meal/mealGetById'

type RouteParams = {
  meal: MealDTO
}

export function Details() {
  const route = useRoute()
  const { meal } = route.params as RouteParams
  const navigation = useNavigation()

  const date = new Date(meal.date)
  const formattedDate = format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })

  const statusDiet = meal.inDiet ? 'GREEN' : 'RED'

  async function onRemove(id: string | number[]) {
    try {
      await mealRemove(id)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
    }
  }

  async function handleRemoveMeal() {
    Alert.alert('Remover refeição', 'Realmente deseja remover a refeição?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => onRemove(meal.id),
      },
    ])
  }

  async function handleGoToRegisterPage(id: string | number[]) {
    const meal = await mealGetById(id)
    console.log(meal)
    navigation.navigate('register', { meal })
  }

  return (
    <Container>
      <HeaderBackPage title="Refeição" inDiet={meal.inDiet} />
      <Content>
        <MealInfoWrapper>
          <TextName>{meal.name}</TextName>
          <SubTitle>{meal.description}</SubTitle>
        </MealInfoWrapper>

        <MealInfoWrapper>
          <Title>Data e hora</Title>
          <SubTitle>{formattedDate}</SubTitle>
        </MealInfoWrapper>

        <Tag>
          <Status color={statusDiet} />
          <TextDiet>
            {meal.inDiet ? 'dentro da dieta' : 'fora da dieta'}
          </TextDiet>
        </Tag>
      </Content>
      <ButtonsWrapper>
        <Button
          title="Editar refeição"
          color="GRAY"
          icon="edit"
          onPress={() => handleGoToRegisterPage(meal.id)}
        />
        <Button
          title="Excluir refeição"
          color="TRANSPARENT"
          icon="trash-2"
          onPress={() => handleRemoveMeal()}
        />
      </ButtonsWrapper>
    </Container>
  )
}
