import styled, { css } from 'styled-components/native'

export type StatusColor = {
  color?: 'RED' | 'GREEN' | 'GRAY'
}

export const Container = styled.View<StatusColor>`
  width: 100%;
  height: 132px;
  padding: 24px;

  flex-direction: row;
  align-items: center;
  background-color: ${({ color, theme }) => {
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
  flex: 1;
  text-align: center;
  margin-right: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`
