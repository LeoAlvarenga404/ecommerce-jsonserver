import styled from "styled-components";

export const DetailsContainer = styled.div`
  
  background-color: ${({theme}) => theme.COLORS.GRAY};
  h1 {
  font-size: 3.8rem;
  text-align: center;
  padding-top: 3rem;
}

`
export const DetailsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  
 
  img {
    width: 100%;
    max-width: 140rem
  }

  .bike-switch {
    display: flex;
    flex-direction: column;

    img {
      width: 6rem;

      &:nth-child(1) {
        width: 5.6rem;
        border-color: black;
      }

      cursor: pointer;
      padding-block: 0.4rem;
      border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY};;

      &:hover {
        border-color: ${({theme}) => theme.COLORS.BLACK};      }
    }
  }
`