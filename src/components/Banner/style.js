import styled from "styled-components";

export const BannerContainer = styled.div`
  background: linear-gradient(180deg, #00000070 1%, #00000001);
  position: relative;
  
  img {
    width: 100%;
    position: relative;
    z-index: -1;
  }

  &::before {
    content: "";
    width: 50%;
    position: absolute;
    bottom: 0;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    height: 10rem;
  }

  // h1 {
//   font-size: 8rem;
//   line-height: 6.5rem;
//   color: ${({theme}) => theme.COLORS.GRAY_800};
// }

// span {
//   text-shadow: 
//     -1px -1px 0 #000,  
//      1px -1px 0 #000,
//     -1px  1px 0 #000,
//      1px  1px 0 #000;
//   color: white;
// }
`



