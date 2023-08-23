import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

export type StatusColor = 'GREEN' | 'GRAY' | 'RED'

type Props = {
  type?: StatusColor
}

export const Container = styled(TouchableOpacity)`
  min-height: 32px;
  max-height: 32px;
  width: 32px;

  align-items: center;
  justify-content: center;
`

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  color: (() => {
    switch (type) {
      case 'GREEN':
        return theme.COLORS.GREEN_DARK
      case 'RED':
        return theme.COLORS.RED_DARK
      default:
        return theme.COLORS.GRAY_600
    }
  })(),
  size: 32,
}))``
