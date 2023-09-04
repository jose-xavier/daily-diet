import styled, { css } from 'styled-components/native'

export type CardStyleProps = {
  color: 'GREEN' | 'RED' | 'GRAY'
}

export const Container = styled.View<CardStyleProps>`
  height: 90px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-top: 12px;
  border-radius: 6px;
  background-color: ${({ theme, color }) => {
    switch (color) {
      case 'GREEN':
        return theme.COLORS.GREEN_LIGHT
      case 'RED':
        return theme.COLORS.RED_LIGHT
      case 'GRAY':
        return theme.COLORS.GRAY_300

      default:
    }
  }};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
