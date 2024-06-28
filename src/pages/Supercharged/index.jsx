import { Container } from "./style";
import { Header } from '../../components/Header'
import { Banner } from "../../components/Banner";
import { TitleBanner } from "../../components/TitleBanner";
import nytro_e_road_bg from '../../assets/nytro-e-road-bg.jpg'
import { ContrastBike } from "../../components/ContrastBike";

export function Supercharged() {
  const backgroundsBikesSupercharged = [
    {
      "title": "NYTRO E ROAD",
      "content": "The Nytro ROAD is destined to mark a new way. It is the lightest E-Road bike on the market, with an unmistakably iconic Pinarello design.",
      "img": nytro_e_road_bg
    }
  ]

  return (
    <Container>
      <Header/>
      <Banner Supercharged/>
      <TitleBanner Supercharged/>
      {
        backgroundsBikesSupercharged.map((bike,index) => (
          <ContrastBike
            key={index}
            title={bike.title}
            content={bike.content}
            img={bike.img}
          />
        ))
      }
    </Container>
  )
}