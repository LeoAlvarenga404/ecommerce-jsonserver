import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  img {
    width: 100%;
  }

  .container {
    display: flex;
    justify-content: space-between;
    padding: 3rem;

  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 70%;

    p {
      font-size: 1.4rem;
    
    }
  
    h2 {
      font-size: 3rem;
      font-weight: 600;
    }

  }
`