import styled from "styled-components";

export const ContainerBikeShop = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  h1 {
    font-size: 6.4rem;
  }
`

export const BikeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1280px;

  gap: 2rem;

  a {
    color: ${({theme}) => theme.COLORS.BLACK};
  }
`