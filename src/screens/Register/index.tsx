import { HeaderBackPage } from '@components/HeaderBackPage'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { Input } from '@components/Input'
import { useState } from 'react'
import moment from 'moment'
import {
  ButtonDate,
  Container,
  DateAndTimeContainer,
  DateTimeText,
  Form,
  Row,
  Title,
} from './styles'

export function Register() {
  const [date, setDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false) // Novo estado para controle do seletor de hora

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowDatePicker(false)
    if (selectedDate !== undefined) {
      setDate(selectedDate)
    }
  }

  const handleHourChange = (
    event: DateTimePickerEvent,
    selectedTime?: Date,
  ) => {
    setShowTimePicker(false) // Fechar o seletor de hora
    if (selectedTime !== undefined) {
      const updatedDate = moment(date)
        .set({
          hour: selectedTime.getHours(),
          minute: selectedTime.getMinutes(),
        })
        .toDate()
      setDate(updatedDate)
    }
  }

  return (
    <Container>
      <HeaderBackPage title="Nova refeição" />
      <Form>
        <Input label="Nome" />
        <Input
          label="Descrição"
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
        />

        <Row>
          <DateAndTimeContainer>
            <Title>Data</Title>
            <ButtonDate onPress={() => setShowDatePicker(true)}>
              <DateTimeText>{moment(date).format('DD/MM/YYYY')}</DateTimeText>
            </ButtonDate>
            {showDatePicker && !showTimePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </DateAndTimeContainer>

          <DateAndTimeContainer>
            <Title>Horas</Title>
            <ButtonDate onPress={() => setShowTimePicker(true)}>
              <DateTimeText>{moment(date).format('HH:mm')}</DateTimeText>
            </ButtonDate>
            {showTimePicker && !showDatePicker && (
              <DateTimePicker
                value={date}
                mode="time"
                display="clock"
                onChange={handleHourChange}
              />
            )}
          </DateAndTimeContainer>
        </Row>
      </Form>
    </Container>
  )
}
