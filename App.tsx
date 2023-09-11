/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { Routes } from './src/routes'
import { MealContextProvider } from './src/context/MealContext'
import theme from './src/theme'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontIsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <MealContextProvider>{!fontIsLoaded ? <Loading /> : <Routes />}</MealContextProvider>
    </ThemeProvider>
  )
}
