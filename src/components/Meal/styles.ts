import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type Props = {
  type: boolean
}

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 49px;
  max-height: 49px;
  padding: 12px;
  margin-top: 8px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
`

export const DataText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Divider = styled.View`
  width: 2px;
  height: 14px;
  margin: 0 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const StatusColor = styled.View<Props>`
  height: 14px;
  width: 14px;
  margin: 0 12px;

  border-radius: 999px;
  background-color: ${({ theme, type }) =>
    type ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
