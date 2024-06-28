import { Container } from "./style";
import { Header } from '../../components/Header'
import { Banner } from "../../components/Banner";
import { TitleBanner } from "../../components/TitleBanner";
import { ContrastBike } from '../../components/ContrastBike';
import new_dogma_f_bg from '../../assets/new-dogma-f-bg.jpg';
import dogma_f_bg from '../../assets/dogma-f-bg.jpg';
import pinarello_f_bg from '../../assets/pinarello-f-bg.jpg';
import bolide_f_tt_bg from '../../assets/bolide-f-tt-bg.jpg';
import bolide_f_hr_bg from '../../assets/bolide-f-hr-bg.jpg';
import bolide_f_tr_bg from '../../assets/bolide-f-tr-bg.jpg';
import bolide_hr_bg from '../../assets/bolide-hr-bg.jpg';
import maat_italia_bg from '../../assets/maat-italia-bg.jpg';
import crossista_f_bg from '../../assets/crossista-f-bg.jpg';


export function Competition() {

  const backgroundsBikesCompetition = [
    {
      "title": "NEW DOGMA F",
      "content": "The new DOGMA F is here. And it is hypnotic.",
      "img": new_dogma_f_bg
    },
    {
      "title": "DOGMA F",
      "content": "Seven of the last 11 Tours de France have been conquered on a DOGMA, and the latest generation is now ready to continue that legacy of success.",
      "img": dogma_f_bg
    },
    {
      "title": "PINARELLO F",
      "content": "Our history is one of extraordinary victories, iconic bicycles, passion, and expertise. The new Pinarello F was born with this unique DNA, created to offer extremely high performance and guide you straight to victory.",
      "img": pinarello_f_bg
    },
    {
      "title": "BOLIDE F TT",
      "content": "From the experience of Pinarello and the continuous search for new successes, Pinarello Bolide F is born.",
      "img": bolide_f_tt_bg
    },
    {
      "title": "BOLIDE F HR",
      "content": "The fastest bike on earth",
      "img": bolide_f_hr_bg
    },
    {
      "title": "BOLIDE F TR",
      "content": "Jewel for triathletes…a winning ally!",
      "img": bolide_f_tr_bg
    },
    {
      "title": "BOLIDE HR",
      "content": "It marked an era...dominating the Hour!",
      "img": bolide_hr_bg
    },
    {
      "title": "MAAT ITALIA",
      "content": "Maat is the most advanced track bike on the market and was conceived by listening to and involving technicians and athletes of the Italian National Team in all the design phases",
      "img": maat_italia_bg
    },
    {
      "title": "CROSSISTA F",
      "content": "The Crossista is our weapon dedicated to Cyclocross competitions.",
      "img": crossista_f_bg
    }
    
  ]

  return (
    <Container>
      <Header/>
      <Banner Competition/>
      <TitleBanner Competition/>

        {
          backgroundsBikesCompetition.map((bike, index) => (
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