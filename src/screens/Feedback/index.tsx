import { useNavigation, useRoute } from '@react-navigation/native';
import ImgNotDiet from '@assets/illustrationNoDiet.png';
import ImgDiet from '@assets/illustrationDiet.png';
import { Button } from '@components/Button'

import { Container, ImageStyled, Subtitle, Title } from './styles';


type RouteParams = {
    inDiet: boolean
  }

export function Feedback() {

  const route = useRoute()
  const {  inDiet } = route.params as RouteParams
  const navigation = useNavigation()


  const handleHomePage = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      <Title type={inDiet ? 'GREEN' : 'RED'}>
        {inDiet ? 'Continue assim!' : 'Que pena!'}
      </Title>

      <Subtitle>
        {inDiet
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}
      </Subtitle>

      <ImageStyled source={inDiet  ? ImgDiet : ImgNotDiet} />

      <Button title="Ir para a página inicial" color="GRAY" onPress={handleHomePage} style={{maxWidth: 190}}/>
    </Container>
  )
}