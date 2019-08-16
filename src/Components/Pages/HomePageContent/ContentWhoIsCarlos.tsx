import React from "react";
import Image from 'react-bootstrap/Image';
import Picture from "../../../Assets/cw.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class ContentWhoIsCarlos extends React.Component{
    getContentText(){
        return (
            <div>
                Mijn naam is Carlos en sinds september 2019 werk ik als zendingswerker 
                voor Operatie Mobilisatie in Moldavië. In Moldavië maak ik onderdeel uit 
                van een team van Operatie Mobilisatie die het evangelie onder de mensen 
                in Moldavië verspreiden. In eerste instantie zal ik voornamelijk op de 
                achtergrond aan het werk zijn, in de hoofdstad Chișinău. Daarna ga ik een 
                Mission Discipleship Training volgen, waarna ik als evangelist aan het 
                werk kan gaan. Gedurende deze periode zal ik bezig zijn met het leren van 
                de Roemeense taal zodat ik kan evangeliseren in de taal die de lokale 
                bevolking spreekt.
            </div>
        );
    }

    getPicture(){
        return (
            <Image src={Picture} fluid roundedCircle />
        );
    }
    
    render(){
        return (
            <Container className="content-paragraph" fluid>
                <Row>
                    <Col className="align-self-center" xs={6} sm={7} md={9} lg={10}>
                        {this.getContentText()}
                    </Col>
                    <Col className="align-self-center" xs={6} sm={5} md={3} lg={2}>
                        {this.getPicture()}
                    </Col>
                </Row>
            </Container>
        );
    }
}