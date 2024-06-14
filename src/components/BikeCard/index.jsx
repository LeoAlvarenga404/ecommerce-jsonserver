import { Container, ContainerBikeCard } from "./style";

// eslint-disable-next-line react/prop-types
export function BikeCard({ name, description, image }) {

  return (
    <Container>
      <ContainerBikeCard>
        <img src={image} alt={name} />
      
      </ContainerBikeCard>
      <div className="card-bike-description">
        <strong>{name}</strong>
        <span>{description}</span>
      </div>
    </Container>
  );
}

