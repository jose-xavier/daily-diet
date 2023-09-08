import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Details } from '@screens/Details'
import { Feedback } from '@screens/Feedback'
import { Home } from '@screens/Home'
import { Register } from '@screens/Register'
import { Statistic } from '@screens/Statistic'

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="register" component={Register} />

      <Screen name="details" component={Details} />

      <Screen name="statistic" component={Statistic} />

      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}
