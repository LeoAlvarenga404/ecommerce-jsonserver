import styled from "styled-components";

export const Container = styled.div`
  

.card-bike-description {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;

  strong {
    width: fit-content;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0%;
      height: 1px;
      background-color: black;
      transition: all 0.3s;
    }
  }
}
img {
  transition: all 0.5s ease-out;
}
&:hover {
    img {
      transform: scale(1.04);
    }

    strong {
      &::before {
        width: 100%;
      }
    }
  }

  
`

export const ContainerBikeCard = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.COLORS.GRAY};
  flex-direction: column;
  padding-block: 3rem;
  position: relative;
  a {
    color: black;
  }
  img {
    width: 100%;
    max-width: 40rem;
  }

  .ball-container {
    display: flex;
    flex-direction:row;
    gap: 2rem;
    left: 2rem;
    bottom: 2rem;

    position: absolute;
    
  }

`

export const ColorBall = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.COLORBALL[color] || color};
  box-shadow: 2px 2px 4px #00000040;
`