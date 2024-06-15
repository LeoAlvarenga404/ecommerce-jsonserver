import { Logo } from "../../assets/Logo";
import { ContainerIcons, HeaderContainer, HeaderNav } from "./style";
import { ShoppingCart, User } from 'phosphor-react'

// eslint-disable-next-line react/prop-types
export function Header({isWhite}) {
 
  return (
    <HeaderContainer isWhite={isWhite}>
      <Logo isWhite={isWhite}/>
      <HeaderNav isWhite={isWhite}>
        <ul>
          <li><a href="#">Bikes</a></li>
          <li><a href="">Apparel</a></li>
          <li><a href="">Acessories</a></li>
          <li><a href="">Support</a></li>
        </ul>
      </HeaderNav>
      <ContainerIcons isWhite={isWhite}>
        <User size={32}/>
        <ShoppingCart size={32}/>
      </ContainerIcons>
    </HeaderContainer>
  )
}