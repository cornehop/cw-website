import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class SupportBlock extends React.Component{
    getText(){
        return (
            <div>
                Om mijn zendingswerk goed te kunnen uitvoeren heb ik u nodig. 
                U kunt mij helpen door voor mij en het team in Moldavië te bidden. 
                Verder kunt u mij financieel ondersteunen. Dit kan via de knop 
                hieronder, deze brengt u naar mijn donatiepagina van OM.
            </div>
        )
    }

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col>{this.getText()}</Col>
                </Row>
                <Row>
                    <Col>
                        <a href="https://www.operatiemobilisatie.nl/carloswessels" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="btn btn-light btn-block cw-donate-btn">
                               DONEREN
                        </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}