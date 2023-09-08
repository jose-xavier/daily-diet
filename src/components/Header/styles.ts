import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Content = styled.View`
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 999px;
  overflow: hidden;
`

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 999px;
`
