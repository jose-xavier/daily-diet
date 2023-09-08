import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type HeaderStyleProps = {
  color?: 'RED' | 'GREEN' | 'GRAY'
  type?: 'default' | 'statistic'
}

export const Container = styled(SafeAreaView)<HeaderStyleProps>`
  width: 100%;
  height: ${({ type }) => (type === 'statistic' ? '200px' : '132px')};
  padding: 8px 24px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case 'GREEN':
        return theme.COLORS.GREEN_LIGHT
      case 'RED':
        return theme.COLORS.RED_LIGHT
      default:
        return theme.COLORS.GRAY_300
    } 
  }};
`

export const Title = styled.Text<HeaderStyleProps>`
  align-self: center;
  margin-right: 16px;
  ${({ theme, type }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${type === 'statistic'
      ? `${theme.FONT_SIZE.XXXL}px`
      : `${theme.FONT_SIZE.XL}px`};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const HeaderTitle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
`
