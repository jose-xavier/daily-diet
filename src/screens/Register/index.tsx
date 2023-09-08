import { useContext, useState } from 'react'
import uuid from 'react-native-uuid'
import { MealContext } from '../../../src/context/MealContext'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format, setHours } from 'date-fns'

import { z } from 'zod'
import DateTimePicker from '@react-native-community/datetimepicker'

import { ButtonSelect } from '@components/ButtonSelect'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { HeaderBackPage } from '@components/HeaderBackPage'

import {
  ButtonDate,
  ButtonWrapper,
  Container,
  DateAndTimeContainer,
  DateTimeText,
  Form,
  Row,
  Title,
} from './styles'
import { MealDTO } from 'src/dtos/MealDTO'
import { mealUpdate } from '@storage/meal/mealUpdate'
import { utcToZonedTime } from 'date-fns-tz'

type RouteParams = {
  meal: MealDTO
}

const newMealFormSchema = z.object({
  name: z.string().min(1, { message: 'Por favor insira o nome da refeição' }),
  description: z
    .string()
    .min(1, { message: 'Por favor insira a descrição da refeição' }),
  date: z.date({
    required_error: 'Por favor selecione a data da refeição',
  }),
  hour: z.date({
    required_error: 'Por favor selecione o horario da refeição',
  }),
  inDiet: z.boolean({
    required_error:
      'Por favor informe se a refeição está ou não dentro da dieta',
  }),
})


type newMealFormSchemaType = z.infer<typeof newMealFormSchema>


export function Register() {
  const timeZone = 'America/Sao_Paulo'; //
  const [date, setDate] = useState(utcToZonedTime(new Date(), timeZone))
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)

  const { addNewMeal } = useContext(MealContext)
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as RouteParams
  const meal = routeParams?.meal

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<newMealFormSchemaType>({
    resolver: zodResolver(newMealFormSchema),
    defaultValues: {
      name: meal !== undefined ? meal.name : '',
      description: meal !== undefined ? meal.description : '',
      date: meal !== undefined ? new Date(meal.date) : date,
      hour: meal !== undefined ? new Date(meal.date) : date,
      inDiet: meal !== undefined ? meal.inDiet : undefined,
    },
  })

  async function hangleGoToHomePage() {
    navigation.navigate('home')
  }

  async function hangleGoToFeedbackPage( inDiet: boolean | undefined) {
    
    navigation.navigate('feedback', { inDiet })
  }

  async function handleCreateAndUpdateMeal(data: newMealFormSchemaType) {
    const { name, description, date, hour, inDiet } = data

    const newHour = Number(format(hour, 'HH'))
    const formattedDate = setHours(date, newHour).toISOString()

    const newMeal = {
      id: uuid.v4(),
      name,
      description,
      date: formattedDate,
      inDiet,
    }

    try {
      if (meal !== undefined) {
        await mealUpdate(meal.id, newMeal)
      } else {
        addNewMeal(newMeal)
      }
      hangleGoToFeedbackPage(newMeal.inDiet)
    } catch (error) {}
  }

  return (
    <Container>
      <HeaderBackPage
        title={meal !== undefined ? 'Editar refeição' : 'Refeição'}
        
        onPress={hangleGoToHomePage}
      />

      <Form>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Nome"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Descrição"
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.description?.message}
            />
          )}
        />

        <Row>
          <DateAndTimeContainer>
            <Controller
              name="date"
              control={control}
              defaultValue={date}
              render={({ field: { value, onChange } }) => (
                <>
                  <Title>Data</Title>
                  <ButtonDate onPress={() => setShowDatePicker(true)}>
                    <DateTimeText>{format(value, 'dd/MM/yyyy')}</DateTimeText>
                  </ButtonDate>
                  {showDatePicker && (
                    <DateTimePicker
                      value={value}
                      mode="date"
                      display="calendar"
                      onChange={(event, selectedDate) => {
                        setShowDatePicker(false)
                        onChange(selectedDate)
                      }}
                    />
                  )}
                </>
              )}
            />
          </DateAndTimeContainer>

          <DateAndTimeContainer>
            <Title>Horas</Title>
            <Controller
              name="hour"
              control={control}
              defaultValue={date}
              render={({ field: { value, onChange } }) => (
                <>
                  <ButtonDate onPress={() => setShowTimePicker(true)}>
                    <DateTimeText>{format(value, 'HH:mm')}</DateTimeText>
                  </ButtonDate>
                  {showTimePicker && (
                    <DateTimePicker
                      value={value}
                      mode="time"
                      is24Hour={true}
                      display="spinner"
                      onChange={(event, selectedDate) => {
                        setShowTimePicker(false)
                        onChange(selectedDate)
                      }}
                    />
                  )}
                </>
              )}
            />
          </DateAndTimeContainer>
        </Row>
        <Title>Está dentro da dieta?</Title>

        <Controller
          control={control}
          name="inDiet"
          render={({ field: { value } }) => (
            <Row>
              <ButtonSelect
                title="Sim"
                color="GREEN"
                isPressed={value === true}
                onPress={() => setValue('inDiet', true)}
              />
              <ButtonSelect
                title="Não"
                color="RED"
                isPressed={value === false}
                onPress={() => setValue('inDiet', false)}
              />
            </Row>
          )}
          defaultValue={true}
        />
      </Form>

        <ButtonWrapper>
          <Button
            title={
              meal !== undefined ? 'Salvar Alterações' : 'Cadastrar Refeição'
            }
            color="GRAY"
          onPress={handleSubmit(handleCreateAndUpdateMeal)}
        />
        </ButtonWrapper>
    </Container>
  )
}
