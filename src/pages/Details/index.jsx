import { DetailsContainer, DetailsContent, SwitchOtherBikes } from "./style";
import { Header } from '../../components/Header'
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Details() {
    const [bikes, setBikes] = useState([])
    const { id } = useParams()
    const [bike, setBike] = useState(null)
    const url = `http://localhost:3000/bikes/${id}`
    
    useEffect(() => {
        axios.get(url)
            .then(res => setBike(res.data))

    }, [url])
   
    useEffect(() => {
        axios.get('http://localhost:3000/bikes')
            .then(res => setBikes(res.data))
    }, [])

    if (!bike) {
        return
    }

    const handleSwitchBike = (imageUrl) => {
        const bikeMain = document.getElementById('bikeMain')
        const bike01 = document.getElementById('bike01')
        const bike02 = document.getElementById('bike02')
        const bike03 = document.getElementById('bike03')

        bikeMain.style.opacity = 0;

        setTimeout(() => {
            bikeMain.src = imageUrl;
            bikeMain.style.opacity = 1;

            if (imageUrl == bike.image) {
                bike01.style.borderColor = 'black'
                bike02.style.borderColor = 'transparent'
                bike03.style.borderColor = 'transparent'
                bike01.style.opacity = '1'
                bike02.style.opacity = '0.6'
                bike03.style.opacity = '0.6'
            }
            if (imageUrl == bike.images[0]) {
                bike01.style.borderColor = 'transparent'
                bike02.style.borderColor = 'black'
                bike03.style.borderColor = 'transparent'
                bike01.style.opacity = '0.6'
                bike02.style.opacity = '1'
                bike03.style.opacity = '0.6'
            }
            if (imageUrl == bike.images[1]) {
                bike01.style.borderColor = 'transparent'
                bike02.style.borderColor = 'transparent'
                bike03.style.borderColor = 'black'
                bike01.style.opacity = '0.6'
                bike02.style.opacity = '0.6'
                bike03.style.opacity = '1'
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
