import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import Picture from "../../../Assets/moldova_map.png";

export class ContentMoldova extends React.Component{
    getContentText(){
        return (
            <div>
                Moldavië ligt in Oost-Europa en is het armste land van Europa. Er wonen 
                ongeveer 3.5 miljoen mensen in Moldavië, waarvan ongeveer 670.000 
                woonachtig zijn in de hoofdstad Chișinău. De voornaamste godsdienst is 
                Oosters-Orthodox (90%), slechts 1% van de bevolking is protestants.
            </div>
        );
    }

    getPicture(){
        return (
            <Image src={Picture} className="img-moldova-map" fluid thumbnail />
        );
    }

    render(){
        return (
            <Container className="content-paragraph" fluid>
                <Row>
                    <Col><h4>Moldavië</h4></Col>
                </Row>
                <Row>
                    <Col className="align-self-center text-left">{this.getPicture()}</Col>
                    <Col className="align-self-center">{this.getContentText()}</Col>
                </Row>
            </Container>
        )
    }
}