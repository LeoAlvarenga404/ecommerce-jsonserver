import { Logo } from "../../assets/Logo";
import { ContainerIcons, HeaderContainer, HeaderNav } from "./style";
import { ShoppingCart, User } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <Logo/>
      <HeaderNav>
        <ul>
          <li><a href="#">Bikes</a></li>
          <li><a href="">Apparel</a></li>
          <li><a href="">Acessories</a></li>
          <li><a href="">Support</a></li>
        </ul>
      </HeaderNav>
      <ContainerIcons>
        <User size={32}/>
        <ShoppingCart size={32}/>
      </ContainerIcons>
    </HeaderContainer>
  )
}