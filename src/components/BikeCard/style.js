import styled from "styled-components";

export const Container = styled.div`
  
.card-bike-description {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
}
`

export const ContainerBikeCard = styled.div`
  display: flex;
  background-color: #F5F5F5;
  flex-direction: column;
  padding-block: 3rem;
  
  img {
    
    width: 100%;
    max-width: 40rem;
  }

  .ball-container {
    display: flex;
    gap: 1rem;
    padding-left: 2rem;
  }
`

export const ColorBall = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: blue;

`