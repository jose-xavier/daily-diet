import { SafeAreaView, TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
`
export const Form = styled.ScrollView`
  flex: 1;

  margin-top: -28px;
  padding: 16px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 20px;
`
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const ButtonSelect = styled(TouchableOpacity)`
  max-height: 50px;
  min-height: 50px;

  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const ButtonDate = styled(TouchableOpacity)`
  width: 100%;
  min-height: 48px;
  max-height: 120px;
  padding: 16px;

  justify-content: center;
  border-width: 1px;
  border-radius: 6px;

  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_400};
  `}
`

export const DateAndTimeContainer = styled.View`
  margin-top: 16px;
  flex: 1;
`

export const Title = styled.Text`
  margin: 6px 0;
  text-align: left;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const DateTimeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`