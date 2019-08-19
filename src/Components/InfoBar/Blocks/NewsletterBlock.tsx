import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
// import { TextInput } from "../../Inputs/TextInput";
// import { EmailInput } from "../../Inputs/EmailInput";

export class NewsletterBlock extends React.Component{
    getSubscribtionEmailLink(){
        const email = "pr@carloswessels.nl";
        const subject = "Abonneren op de nieuwsbrief";
        let href = "mailto:" + email + "?subject=" + subject;

        return (
            <a href={href}>{email}</a>
        )
    }
    
    getText(){
        return (
            // <div>
            //     Gedurende mijn verblijf in Moldavië worden er regelmatig 
            //     filmpjes en nieuwsbrieven gemaakt waarin ik vertel wat ik 
            //     in Moldavië doe en meemaak. Wilt u hiervan op de hoogte 
            //     blijven? Vul dan uw naam en e-mailadres hieronder in.
            // </div>
            <div>
                Gedurende mijn verblijf in Moldavië worden er regelmatig 
                filmpjes en nieuwsbrieven gemaakt waarin ik vertel wat ik 
                in Moldavië doe en meemaak. Wilt u hiervan op de hoogte 
                blijven? Dan kunt u zich aanmelden door een e-mail te sturen naar: {this.getSubscribtionEmailLink()}.
            </div>
        )
    }

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col>{this.getText()}</Col>
                </Row>
                {/* <Row className="cw-newsletterblock-form">
                    <Col xs={4}>Naam: </Col>
                    <Col xs={8}>
                        <TextInput id="newsletterblock-name" />
                    </Col>
                </Row>
                <Row className="cw-newsletterblock-form">
                    <Col xs={4}>E-mailadres *: </Col>
                    <Col xs={8}>
                        <EmailInput id="newsletterblock-email" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="https://www.operatiemobilisatie.nl/carloswessels" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light btn-block cw-donate-btn">
                                ABONNEREN
                        </a>
                    </Col>
                </Row> */}
                <Row>
                    <Col>
                        <small className="text-muted">
                            * We zullen uw e-mailadres voor geen enkel ander doeleinde gebruiken
                            dan het versturen van onze nieuwsbrief.
                        </small>
                    </Col>
                </Row>
            </Container>
        )
    }
}