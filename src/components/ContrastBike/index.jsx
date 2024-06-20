import { ContrastBikeContainer, ContrastBikeText } from "./style";
import { Button } from '../Button'

export function ContrastBike({title, content, img}) {

  return (
    <ContrastBikeContainer>
      <img src={img} alt="" />
      <ContrastBikeText>
        <h2>{title}</h2>
        <p>{content}
        </p>
        <Button content={`DISCOVER ${title}`}/>
      </ContrastBikeText>
    </ContrastBikeContainer>
  )
}