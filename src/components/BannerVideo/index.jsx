import { VideoBackground } from "./style";
import videobackground from '../../assets/videobackground.mp4'

export function BannerVideo() {
  return (
    <VideoBackground>
      <video autoPlay loop muted >
        <source src={videobackground} type="video/mp4" />
      </video>
    </VideoBackground>
  );
}