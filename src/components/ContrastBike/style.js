import styled from "styled-components";

export const ContrastBikeContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding-block: 4rem;
 
  img {
    width: 100%;
    z-index: -1;
  }
`

export const ContrastBikeText = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  width: calc(50% - 4rem);
  gap: 3rem;
  padding-left: 4rem;

  h2 {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 4rem;
    text-transform: uppercase;
    line-height: 3rem;
  }

  p {
    color: ${({theme}) => theme.COLORS.GRAY_600};
    font-weight: 300;
  }
`