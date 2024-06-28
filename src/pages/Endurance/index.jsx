import { Container } from "./style";
import { Header } from '../../components/Header'
import { Banner } from "../../components/Banner";
import { TitleBanner } from "../../components/TitleBanner";
import { ContrastBike } from "../../components/ContrastBike";

import dogmaxbg from '../../assets/dogma-x-bg.jpg'
import pinarelloxbg from '../../assets/pinarello-x-bg.jpg'

export function Endurance() {

  const backgroundsBikesEndurance = [
    {
      "title": "DOGMA X",
      "content": "This bike has been designed with a new approach to geometry and technical design that strikes the perfect balance of performance and ride comfort.",
      "img": dogmaxbg
    },
    {
      "title": "PINARELLO X",
      "content": "Thanks to a combination of specifically-selected materials, unique geometry, and a truly innovative rear-end, the Pinarello X strikes the perfect balance between reactivity, performance and comfort.",
      "img": pinarelloxbg
    }
  ]

  return (
    <Container>
      <Header/>
      <Banner Endurance/>
      <TitleBanner Endurance/>
      {
        backgroundsBikesEndurance.map((bike, index) => (
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