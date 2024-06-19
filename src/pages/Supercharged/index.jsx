import { Container } from "./style";
import { Header } from '../../components/Header'
import { Banner } from "../../components/Banner";
import { TitleBanner } from "../../components/TitleBanner";
export function Supercharged() {
  return (
    <Container>
      <Header/>
      <Banner Supercharged/>
      <TitleBanner Supercharged/>
    </Container>
  )
}