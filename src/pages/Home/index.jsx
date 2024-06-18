import { useEffect, useState } from 'react';
import axios from 'axios';
import { BikeCard } from "../../components/BikeCard";
import { Header } from "../../components/Header";
import { BikeCards, ContainerBikeShop } from "./styles";

import { Link } from 'react-router-dom';
import { Banner } from '../../components/Banner';

export function Home() {
  const [bikes, setBikes] = useState([]);
  const url = 'http://localhost:3000/bikes'
  useEffect(() => {
    axios.get(url)
      .then(res => setBikes(res.data))
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <ContainerBikeShop>
        <h1>ROAD BIKES</h1>
        <BikeCards>
          {bikes.map(bike => (
            <Link key={bike.id} to={`/details/${bike.id}`}>
              <BikeCard
                name={bike.name}
                description={bike.description}
                image={bike.image}
                colors={bike.colors}
              />
            </Link>
            ))}
        </BikeCards>
      </ContainerBikeShop>
    </div>
  );
}
