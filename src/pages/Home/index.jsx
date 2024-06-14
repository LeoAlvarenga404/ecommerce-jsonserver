import { useEffect, useState } from 'react';
import axios from 'axios';
import { BannerVideo } from "../../components/BannerVideo";
import { BikeCard } from "../../components/BikeCard";
import { Header } from "../../components/Header";
import { BikeCards, ContainerBikeShop } from "./styles";

export function Home() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/bikes')
      .then(response => setBikes(response.data))
  }, []);

  return (
    <div>
      <Header />
      <BannerVideo />
      <ContainerBikeShop>
        <h1>ROAD BIKES</h1>
        <BikeCards>
        {bikes.map(bike => (
          <BikeCard
            key={bike.id}
            name={bike.name}
            description={bike.description}
            image={bike.image}
            colors={bike.colors}
          />
        ))}

        </BikeCards>
      </ContainerBikeShop>
    </div>
  );
}
