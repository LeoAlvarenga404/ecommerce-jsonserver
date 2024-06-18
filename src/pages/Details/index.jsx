import { DetailsContainer, DetailsContent, SwitchOtherBikes } from "./style";
import { Header } from '../../components/Header'
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Details() {
    const [bikes, setBikes] = useState([])
    const { id } = useParams()
    const [bike, setBike] = useState(null)
    const url = `http://localhost:3000/bikes`
    
    useEffect(() => {
        axios.get(`${url}/${id}`)
            .then(res => setBike(res.data))

    }, [url, id])
   
    useEffect(() => {
        axios.get(url)
            .then(res => setBikes(res.data))
    }, [url])

    if (!bike) {
        return
    }

    const bike01 = document.getElementById('bike01')
    const bike02 = document.getElementById('bike02')
    const bike03 = document.getElementById('bike03')

    function setStyles(borderIndex, opacityIndex) {
        const bikes = [bike01, bike02, bike03];
        bikes.forEach((bike, index) => {
            bike.style.borderColor = index === borderIndex ? 'black' : 'transparent';
            bike.style.opacity = index === opacityIndex ? '1' : '0.6';
        });
    }

    const handleSwitchBike = (imageUrl) => {
        const bikeMain = document.getElementById('bikeMain')
    
        bikeMain.style.opacity = 0;

        setTimeout(() => {
            bikeMain.src = imageUrl;
            bikeMain.style.opacity = 1;

            if (imageUrl == bike.image) {
                setStyles(0, 0);
            } else if (imageUrl == bike.images[0]) {
                setStyles(1, 1);
            } else {
                setStyles(2, 2);
            }
          }, 300);    
    }
    
    const bikeTags = bike.tags
    
    const similarBikes = bikes.filter(b => b.model === bike.model)
    return (
        <DetailsContainer>
            <Header isWhite/>
                <span>{bikeTags.join(' / ')} / {bike.model}</span>
                <h1>{bike.model}</h1>
            <DetailsContent>
                <div className="bike-switch">
                    <img
                        id="bike01"
                        src={bike.image}
                        alt="Bike"
                        onClick={() => handleSwitchBike(bike.image)} />
                    <img
                        id="bike02"
                        src={bike.images[0]}
                        alt="Bike"
                        onClick={() => handleSwitchBike(bike.images[0])} />
                    <img
                        id="bike03"
                        src={bike.images[1]}
                        alt="Bike"
                        onClick={() => handleSwitchBike(bike.images[1])} />
                </div>
                <img id="bikeMain" src={bike.image} alt="Bike" />
            </DetailsContent>
                <SwitchOtherBikes>
                    <div>
                        <p>{bike.disc}</p>
                        <h2>{bike.name}</h2>
                    </div>
                    <div className="other-bikes">
                        {similarBikes.map(b => (
                            <Link key={b.id} to={`/details/${b.id}`}>
                                <img src={b.image} alt={b.model} />
                                
                            </Link>
                        ))

                        }
                    </div>
                </SwitchOtherBikes>
        </DetailsContainer>
    )
}
