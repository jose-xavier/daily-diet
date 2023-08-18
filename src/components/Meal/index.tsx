import { TouchableOpacityProps } from 'react-native'
import { MealDTO } from '@components/dtos/MealDTO'
import moment from 'moment'
import { Container, DataText, Divider, StatusColor, Title } from './styles'

type Props = TouchableOpacityProps & {
  item: MealDTO
}

export function Meal({ item, ...rest }: Props) {
  return (
    <Container {...rest}>
      <DataText>{moment(item.date).format('HH:mm')}</DataText>
      <Divider />
      <Title>{item.name}</Title>
      <StatusColor type={item.isDiet} />
    </Container>
  )
}
