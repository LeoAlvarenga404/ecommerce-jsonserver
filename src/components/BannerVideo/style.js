import styled from "styled-components";

export const VideoBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  &:before {
    content: "";
    position: absolute;
    background-color: ${({theme}) => theme.COLORS.BG_OPACITY};
    top: 0;
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;