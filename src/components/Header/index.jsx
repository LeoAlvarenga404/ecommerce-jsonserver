import { useEffect, useState } from 'react';
import { Logo } from '../../assets/Logo';
import { ContainerIcons, HeaderContainer } from './style';
import { ShoppingCart, User } from 'phosphor-react';


export function Header({ isWhite }) {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setIsVisible(isVisible);
      setPrevScrollPos(currentScrollPos);

    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isVisible]);
  
  {prevScrollPos > 0 ? isWhite = true : false}

  return (
    <HeaderContainer isWhite={isWhite} isVisible={isVisible}>
      <Logo isWhite={isWhite} />
      <ContainerIcons isWhite={isWhite}>
        <User size={32} />
        <ShoppingCart size={32} />
      </ContainerIcons>
    </HeaderContainer>
  );
}
