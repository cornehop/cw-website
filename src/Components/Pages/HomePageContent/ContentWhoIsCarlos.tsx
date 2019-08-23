import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import Picture from "../../../Assets/cw.jpg";


export class ContentWhoIsCarlos extends React.Component{
    renderMdtLink(){
        return (
            <a href="https://www.om.org/en/ministry-profile/mission-discipleship-training"
               target="_blank"
               rel="noopener noreferrer"
            >Mission Discipleship Training</a>
        )
    }

    renderOmMoldovaLink(){
        return (
            <a href="https://www.om.org/md/en"
               target="_blank"
               rel="noopener noreferrer"
            >Operatie Mobilisatie in Moldavië</a>
        )
    }

    renderMoldovaLink(){
        return (
            <a href="https://nl.wikipedia.org/wiki/Moldavi%C3%AB_(land)"
               target="_blank"
               rel="noopener noreferrer"
            >Moldavië</a>
        )
    }
    
    getContentText(){
        return (
            <div>
                Mijn naam is Carlos en sinds september 2019 werk ik als zendingswerker 
                voor {this.renderOmMoldovaLink()}. In {this.renderMoldovaLink()} maak ik onderdeel uit 
                van een team van Operatie Mobilisatie die het evangelie onder de mensen 
                in Moldavië verspreiden. In eerste instantie zal ik voornamelijk op de 
                achtergrond aan het werk zijn, in de hoofdstad Chișinău. 
                Daarna ga ik een {this.renderMdtLink()} volgen, waarna ik als evangelist aan het 
                werk kan gaan. Gedurende deze periode zal ik bezig zijn met het leren van 
                de Roemeense taal zodat ik kan evangeliseren in de taal die de lokale 
                bevolking spreekt.
            </div>
        );
    }

    getPicture(){
        return (
            <Image src={Picture} className="cw-image-head" roundedCircle />
        );
    }
    
    render(){
        return (
            <Container className="content-paragraph" fluid>
                <Row>
                    <Col className="align-self-center">
                        {this.getPicture()}
                        {this.getContentText()}
                    </Col>
                </Row>
            </Container>
        );
    }
}