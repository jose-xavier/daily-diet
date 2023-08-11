import { Home } from '@screens/Home'
import theme from './src/theme'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
