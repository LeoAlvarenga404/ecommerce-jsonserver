import { Container } from "./style";
import { Header } from '../../components/Header'
import { Banner } from "../../components/Banner";
import { TitleBanner } from "../../components/TitleBanner";

export function Competition() {
  return (
    <Container>
      <Header/>
      <Banner Competition/>
      <TitleBanner Competition/>
    </Container>
  )
}