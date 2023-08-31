import { SafeAreaView } from 'react-native'
import styled, { css } from 'styled-components/native'

export type StatusColor = {
  color: 'RED' | 'GREEN' | 'GRAY'
}

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const Content = styled.ScrollView`
  flex: 1;
  padding: 16px 24px;
  margin-top: -28px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 20px;
`
export const MealInfoWrapper = styled.View`
  margin-top: 18px;
  gap: 4px;
`

export const TextName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`
export const ButtonsWrapper = styled.View`
  padding: 24px;
`

export const Tag = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 6px;
  height: 34px;
  width: 144px;
  border-radius: 999px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Status = styled.View<StatusColor>`
  height: 8px;
  width: 8px;

  border-radius: 999px;
  background-color: ${({ color, theme }) =>
    color === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const TextDiet = styled.Text`
  align-self: flex-start;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`
