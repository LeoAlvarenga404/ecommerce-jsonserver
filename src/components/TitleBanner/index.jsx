import { Container } from "./style";


export function TitleBanner({Endurance, Competition, Supercharged}) {

  let bikeTags = ['BIKES','ROAD']
  let titleBike = 'BIKES'
  let subtitleBike = 'ROAD'

  if (Endurance) {
    titleBike = 'ROAD';
    subtitleBike = 'ENDURANCE';
    bikeTags.push(subtitleBike);
  }
  
  if (Competition) {
    titleBike = 'ROAD';
    subtitleBike = 'COMPETITION';
    bikeTags.push(subtitleBike);
  } 

  if (Supercharged) {
    titleBike = 'ROAD';
    subtitleBike = 'SUPERCHARGED';
    bikeTags.push(subtitleBike);
  }

  return (
    <Container>
      <span>{bikeTags.join(' / ')}</span>
      <h1>{titleBike}</h1>
      <h2>{subtitleBike}</h2>
    </Container>
  )
}