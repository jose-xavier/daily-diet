import { TouchableProps } from 'react-native-svg'
import { Container, HeaderTitle, Subtitle, Title } from './styles'
import { ButtonIcon } from '@components/ButtonIcon'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import { MealContext } from '../../context/MealContext'

type Props = TouchableProps & {
  inDiet?: boolean 
  title: string | number
  type?: 'default' | 'statistic'
}

export function HeaderBackPage({ title, inDiet, type, ...rest }: Props) {
  const {  sumaryMeals } = useContext(MealContext)
  const navigation = useNavigation()
  const porcent = typeof title === 'number' ? title : Number(title)

  const statusColorDiet = inDiet === true || porcent >= 65 ? 'GREEN' :
  (inDiet === false || porcent < 65) ? 'RED' :
  'GRAY';
  

  
  function hangleGoToHomePage() {
    navigation.navigate('home')
  }

  return (
    <Container color={statusColorDiet} type={type}>
      <ButtonIcon
        icon="arrow-left"
        {...rest}
        onPress={hangleGoToHomePage}
        type={statusColorDiet}
      />
      <HeaderTitle>
        <Title type={type}>{title}{typeof title === 'number' && '%'}</Title>
        {type === 'statistic' && (
          <Subtitle>das refeições dentro da dieta</Subtitle>
        )}
      </HeaderTitle>
    </Container>
  )
}
