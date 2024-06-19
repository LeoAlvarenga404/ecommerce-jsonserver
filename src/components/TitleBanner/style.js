import styled from "styled-components";

export const Container = styled.div`
     color: ${({theme}) => theme.COLORS.GRAY_800};

  max-width: 1280px;
  margin: 0 auto;
  padding-left: 5rem;
  transform: translateY(-5rem);

  span {
    font-size: 1rem;
    font-weight: 300;
  }

  h1, h2 {
   font-size: 9rem;
   line-height: 8rem;
   letter-spacing: 0.7rem;
   font-weight:600;
 }

  h2 {
    text-shadow: 
     -1px -1px 0 ${({theme}) => theme.COLORS.GRAY_800},  
      1px -1px 0 ${({theme}) => theme.COLORS.GRAY_800},
     -1px  1px 0 ${({theme}) => theme.COLORS.GRAY_800},
      1px  1px 0 ${({theme}) => theme.COLORS.GRAY_800};
    color: white;
 }
`