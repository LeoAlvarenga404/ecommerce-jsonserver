import { Container } from "./style";
import enduranceImg from '../../assets/bg-endurance.jpg'
import superchargedImg from '../../assets/bg-supercharged.jpg'
import competitionImg from '../../assets/bg-competition.jpg'
import { Link } from "react-router-dom";
import { Button } from '../Button'
export function RoadsContainer({Endurance, Competition, Supercharged}) {
  const TypeRoadContent = {
    endurance: {
      title: "ENDURANCE",
      content: "These bikes inspire confidence by delivering the comfort and control you need to conquer the road. Built with the same DNA as our Tour de France winning machines, our Endurance range is designed for long days in the saddle and the kind of exciting rides that make unforgettable memories. Unlock your full potential and get the most out every ride on a bike that stirs emotions and fires up your spirit of adventure.",
      url: "/endurance"
    },
    competition: {
      title: "COMPETITION",
      content: "Pinarello was born out of a passion for racing and our bikes have helped the sport’s greatest athletes redefine the limits of performance. So, whether you want to hunt every KOM or launch an audacious attack when your rivals least expect it, these bikes will take you further and faster than you ever thought possible because each one is a natural born winner.",
      url: "/competition"
    },
    supercharged: {
      title: "SUPERCHARGED",
      content: "When you dream of going further than legs alone will carry you, we’ve got you covered. Our e-bikes combine Pinarello’s iconic design traits, superior handling, and industry-leading aerodynamic knowledge with powerful motors that will make you unstoppable.",
      url: "/supercharged"
    }
  };
  // reset 
  let typeImg = ''
  let typeTitle = ''
  let typeContent = ''
  let typeUrl = ''

  if (Endurance) {
    typeImg = enduranceImg;
    typeTitle = TypeRoadContent.endurance.title;
    typeContent = TypeRoadContent.endurance.content;
    typeUrl = TypeRoadContent.endurance.url;
  }

  if (Competition) {
    typeImg = competitionImg;
    typeTitle = TypeRoadContent.competition.title;
    typeContent = TypeRoadContent.competition.content;
    typeUrl = TypeRoadContent.competition.url;
  }
  if (Supercharged) {
    typeImg = superchargedImg;
    typeTitle = TypeRoadContent.supercharged.title;
    typeContent = TypeRoadContent.supercharged.content;
    typeUrl = TypeRoadContent.supercharged.url;
  }

  return (
    <Container>
      <img src={typeImg} alt="" />
      <div className="container">
        <div className="content">
          <h2>{typeTitle}</h2>
          <p>{typeContent}</p>
          <Link to={typeUrl}><Button content={'Discover more'}/></Link>
        </div>
        <Link to={`${typeUrl}#bike_list`}><Button isBlack/></Link>
      </div>
    </Container>
  )
}