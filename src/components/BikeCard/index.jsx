import { ColorBall, Container, ContainerBikeCard } from "./style";

// eslint-disable-next-line react/prop-types
export function BikeCard({ name, description, image, colors = [] }) {
  return (
    <Container>
      <ContainerBikeCard>
        <img src={image} alt={name} />
        <div className="ball-container">
          {colors.filter(color => color!== "").map((color, index) => (
            <ColorBall key={index} color={color.toUpperCase()} />
          ))}
        </div>
      </ContainerBikeCard>
      <div className="card-bike-description">
        <strong>{name}</strong>
        <span>{description}</span>
        
      </div>
    </Container>
  );
}