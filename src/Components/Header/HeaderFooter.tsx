import React from "react";
import Carousel from 'react-bootstrap/Carousel'

export class HeaderFooter extends React.Component{
    render(){
        return(
            <Carousel nextIcon="" prevIcon="" indicators={false} controls={false}>
                <Carousel.Item>
                    <h6><a href="https://www.operatiemobilisatie.nl" target="_blank">Klik hier voor meer informatie over het werk van Operatie Mobilisatie in Nederland</a></h6>
                </Carousel.Item>
                <Carousel.Item>
                <h6><a href="https://www.om.org/md/en" target="_blank">Klik hier voor meer informatie over het werk van Operatie Mobilisatie in Moldavië</a></h6>
                </Carousel.Item>
            </Carousel>
        );
    }
}


// <h6>Hier komt een carousel, met mogelijkheden om nieuws te plaatsen, info linkjes naar OM NL en Moldavie etc.</h6>