import { TouchableOpacityProps } from 'react-native'
import { MealDTO } from 'src/dtos/MealDTO'

import { Container, DataText, Divider, StatusColor, Title } from './styles'
import { format, parseISO } from 'date-fns'

type Props = TouchableOpacityProps & {
  item: MealDTO
}

export function Meal({ item, ...rest }: Props) {
  const date = parseISO(item.date)

  return (
    <Container {...rest}>
      <DataText>{format(date, 'HH:mm')}</DataText>
      <Divider />
      <Title>{item.name}</Title>
      <StatusColor type={item.inDiet} />
    </Container>
  )
}
