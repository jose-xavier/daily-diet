import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type StatusColor = 'GREEN' | 'RED'

type Props = {
  type: StatusColor
}

export const Container = styled(TouchableOpacity)<Props>`
  max-height: 50px;
  min-height: 50px;

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  border-width: 1px;

  border-color: ${({ type, theme }) => {
    switch (type) {
      case 'GREEN':
        return theme.COLORS.GREEN_DARK
      case 'RED':
        return theme.COLORS.RED_DARK

      default:
        return 'transparent'
    }
  }};

  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'GREEN':
        return theme.COLORS.GREEN_LIGHT
      case 'RED':
        return theme.COLORS.RED_LIGHT

      default:
        return theme.COLORS.GRAY_300
    }
  }};
`

export const Status = styled.View<Props>`
  height: 8px;
  width: 8px;
  border-radius: 999px;

  background-color: ${({ type, theme }) =>
    type === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
