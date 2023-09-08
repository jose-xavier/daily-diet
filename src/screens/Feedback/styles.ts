 
import styled, { css } from 'styled-components/native';

type TitleStyleProps = {
  type: 'GREEN' | 'RED'
}

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<TitleStyleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'GREEN'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `};

  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};

  text-align: center;
  margin-bottom: 32px;
`;

export const ImageStyled = styled.Image`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 40px;
`;