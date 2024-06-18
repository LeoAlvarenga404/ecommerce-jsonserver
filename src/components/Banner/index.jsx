import { BannerContainer } from "./style";
import background from '../../assets/bg-home.jpg'

export function Banner() {
  return (
    <BannerContainer>
      <img src={background} alt="" />
    </BannerContainer>
  )
}