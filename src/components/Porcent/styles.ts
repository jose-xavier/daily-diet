import { StatusColor } from '@components/ButtonIcon/styles'
import styled, { css } from 'styled-components/native'

export type StyleProps = {
  type: StatusColor
}

export const Container = styled.View<StyleProps>`
  width: 100%;
  height: 102px;
  padding: 0 4px;
  margin: 36px 0;
  align-items: flex-end;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  margin-top: -20px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Subtitle = styled.Text`
  width: 100%;
  text-align: center;
  margin-bottom: 16px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`
