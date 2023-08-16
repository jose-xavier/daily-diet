import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'GRAY' | 'TRANSPARENT'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  margin-top: 12px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-radius: 6px;

  background-color: ${({ theme, type }) =>
    type === 'GRAY' ? theme.COLORS.GRAY_600 : 'transparent'};

  border-color: ${({ theme, type }) =>
    type === 'TRANSPARENT' ? theme.COLORS.GRAY_700 : 'none'};
`

export const Title = styled.Text<Props>`
  margin-left: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme, type }) =>
    type === 'GRAY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  color: type === 'TRANSPARENT' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE,
  size: 20,
}))``
