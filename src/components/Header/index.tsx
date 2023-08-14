import logo from '@assets/logo.png'
import user from '@assets/user.png'
import { Container, Logo, Avatar, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Content>
        <Avatar source={user} />
      </Content>
    </Container>
  )
}
