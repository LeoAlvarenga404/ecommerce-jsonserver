import { ButtonContainer } from "./style";

export function Button({ isBlack, content }) {
  return (
    <ButtonContainer isBlack={isBlack}>
      {content ? content : 'View Bike'}
    </ButtonContainer>
  )
}