import { DetailsContainer, DetailsContent } from "./style";
import { Header } from '../../components/Header'
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Details() {

    const { id } = useParams()
    const [bike, setBike] = useState(null)
    const url = `http://localhost:3000/bikes/${id}`
    useEffect(() => {
        axios.get(url)
            .then(res => setBike(res.data))

    }, [url])

    if (!bike) {
        return
    }
    
    const handleSwitchBike = (imageUrl) => {
        const bikeMain = document.getElementById('bikeMain').src = imageUrl
        const bike01 = document.getElementById('bike01')
        const bike02 = document.getElementById('bike02')
        const bike03 = document.getElementById('bike03')

        if (bikeMain == bike.image) {
            bike01.style.borderColor = 'black'
            bike02.style.borderColor = 'transparent'
            bike03.style.borderColor = 'transparent'
        }
        if (bikeMain == bike.images[0]) {
            bike01.style.borderColor = 'transparent'
            bike02.style.borderColor = 'black'
            bike03.style.borderColor = 'transparent'
        }
        if (bikeMain == bike.images[1]) {
            bike01.style.borderColor = 'transparent'
            bike02.style.borderColor = 'transparent'
            bike03.style.borderColor = 'black'
        }
        
        return bikeMain
    }
    
    return (
        <DetailsContainer>
            <Header isWhite/>
                <h1>{bike.name}</h1>
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
        </DetailsContainer>
    )
}
