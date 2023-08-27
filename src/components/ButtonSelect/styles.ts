import { Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonSelectStyleProps = {
  color?: 'RED' | 'GREEN'
  isPressed?: boolean
  title?: 'Sim' | 'Não'
}

export const Container = styled(Pressable)<ButtonSelectStyleProps>`
  max-height: 50px;
  min-height: 50px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border-width: 1px;

  border-color: ${({ color, theme, isPressed }) => {
    if (isPressed) {
      return color === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
    } else {
      return 'transparent'
    }
  }};

  background-color: ${({ color, theme, isPressed }) => {
    if (isPressed) {
      return color === 'GREEN'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
    } else {
      return theme.COLORS.GRAY_300
    }
  }};
`

export const Status = styled.View<ButtonSelectStyleProps>`
  height: 8px;
  width: 8px;
  border-radius: 999px;

  background-color: ${({ title, theme }) =>
    title === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
