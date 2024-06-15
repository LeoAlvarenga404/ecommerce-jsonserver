import styled from "styled-components";

export const DetailsContainer = styled.div`
 
  background-color: ${({theme}) => theme.COLORS.GRAY};
  text-align: center;

  span {
    font-size: 1rem;
    color: ${({theme}) => theme.COLORS.GRAY_800};
  }

  h1 {
  font-size: 5rem;
  
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.GRAY_800};
  }

  .other-bikes {
    display: flex;
    justify-content: center;
    gap: 3rem;
    img {
      width: 9rem;
    }
  }
`
export const DetailsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding-inline: 3rem;
  
  img {
    width: 100%;
    max-width: 140rem;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .bike-switch {
    display: flex;
    flex-direction: column;

    img {
      width: 5rem;
      opacity: 0.6;
      
      &:nth-child(1) {
        width: 4%.6;
        border-color: black;
        opacity: 1;
      }

      cursor: pointer;
      padding-block: 0.4rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};

      &:hover {
        border-color: ${({ theme }) => theme.COLORS.BLACK} !important;
        opacity: 0.8 !important;
      }
    }
  }

  
`;

export const SwitchOtherBikes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  transform: translateY(-12rem);
  color: ${({theme}) => theme.COLORS.GRAY_800};
  p {
    font-size: 1.2rem;
  
    font-weight: 500;
    margin-bottom: 2rem;
  }
  
  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    
  }

`