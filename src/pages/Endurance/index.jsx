import { Container } from "./style";
import { Header } from '../../components/Header'
import { Banner } from "../../components/Banner";
import { TitleBanner } from "../../components/TitleBanner";
export function Endurance() {
  return (
    <Container>
      <Header/>
      <Banner Endurance/>
      <TitleBanner Endurance/>
    </Container>
  )
}