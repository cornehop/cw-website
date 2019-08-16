import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class SupportBlock extends React.Component{
    getText(){
        // TODO Get some nice copy for this part
        return (
            <div>
                TODO hier een goede uitnodigende tekst plaatsen...
                U kunt mij steunen door voor mij en het team in Moldavië te bidden.
                Daarnaast kan ik mijn werk alleen doen omdat mensen mij financieel steunen.
                Wilt u mij steunen? Dan kunt u via de knop hieronder naar mijn donatiepagina van OM gaan.
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
                           className="btn btn-light btn-block cw-donate-btn">
                               DONEREN
                        </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}