/* eslint-disable camelcase */
import { Register } from '@screens/Register'
import theme from './src/theme'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

export default function App() {
  const [fontIsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>{fontIsLoaded && <Register />}</ThemeProvider>
  )
}
