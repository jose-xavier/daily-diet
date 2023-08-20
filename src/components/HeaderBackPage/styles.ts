import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 132px;
  padding: 24px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`
