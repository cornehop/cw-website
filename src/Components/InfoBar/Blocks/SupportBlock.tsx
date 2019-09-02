import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Trans } from "react-i18next";

export class SupportBlock extends React.Component{
    getText(){
        return (
            <Trans i18nKey="infobar.support.content">
                Om mijn zendingswerk goed te kunnen uitvoeren heb ik u nodig. 
                U kunt mij helpen door voor mij en het team in Moldavië te bidden. 
                Verder kunt u mij financieel ondersteunen. Dit kan via de knop 
                hieronder, deze brengt u naar mijn donatiepagina van OM.
            </Trans>
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
                        <Trans i18nKey="infobar.support.donate">
                        <a href="https://www.operatiemobilisatie.nl/carloswessels" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="btn btn-light btn-block cw-donate-btn">
                               DONEREN
                        </a>
                        </Trans>
                    </Col>
                </Row>
            </Container>
        )
    }
}