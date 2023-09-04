import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.ScrollView`
  flex: 1;
  padding: 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-top: -48px;
`
export const Title = styled.Text`
  margin: 14px;
  align-self: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
