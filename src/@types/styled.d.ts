import 'syled-component/native'
import theme from '../theme'

declare module 'syled-component/native' {
  type ThemeType = typeof theme
  export type DefaultTheme = ThemeType
}
