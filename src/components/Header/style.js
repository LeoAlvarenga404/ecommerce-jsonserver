import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  position: fixed;
  top: ${props => props.isVisible ? '0' : '-7rem'};
  width: 100%;
  height: 7rem;
  padding-inline: 4rem;
  transition: all 0.2s ease;
  background-color: ${ props => props.isWhite ? props.theme.COLORS.WHITE : 'transparent'};
`;

export const HeaderNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    text-transform: uppercase;
   
      a {
        color:${props => props.isWhite ? props.theme.COLORS.BLACK : props.theme.COLORS.WHITE};
      }
  }
`
export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    cursor: pointer;
    color:${props => props.isWhite ? props.theme.COLORS.BLACK : props.theme.COLORS.WHITE};
  }
`