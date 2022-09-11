import { HeaderContainer } from 'styles/components/Header.styled'

type THeaderProps = {
  children: React.ReactNode
}
const Header = ({ children }: THeaderProps) => {
  return <HeaderContainer>{children}</HeaderContainer>
}

export default Header
