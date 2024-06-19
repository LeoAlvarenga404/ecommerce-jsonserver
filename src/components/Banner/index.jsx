import { BannerContainer } from "./style";
import homeImg from '../../assets/bg-home.jpg'
import enduranceImg from '../../assets/bg-endurance.jpg'
import superchargedImg from '../../assets/bg-supercharged.jpg'
import competitionImg from '../../assets/bg-competition.jpg'

export function Banner({ Endurance, Supercharged, Competition}) {
  let imgSrc = homeImg;

  if(Endurance) {
    imgSrc = enduranceImg
  }
  if(Supercharged) {
    imgSrc = superchargedImg
  }
  if(Competition) {
    imgSrc = competitionImg
  }

  return (
    <BannerContainer>
      <img id="img" src={imgSrc} alt="Background" />
    </BannerContainer>
  )
}