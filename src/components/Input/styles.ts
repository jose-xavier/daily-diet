import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin-top: 16px;
`

export const InputText = styled(TextInput)`
  flex: 1;
  min-width: 48px;
  max-height: 120px;
  padding: 10px;

  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-width: 1px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const Label = styled.Text`
  margin: 6px 0;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
