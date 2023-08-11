import logo from '@assets/logo.png'
import user from '@assets/user.png'
import { Container, Logo, Avatar } from './styles'

export function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Avatar source={user} />
    </Container>
  )
}
