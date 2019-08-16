import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextInput } from "../../Inputs/TextInput";
import { EmailInput } from "../../Inputs/EmailInput";

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
        // TODO Get some nice copy for this part
        return (
            <div>
                TODO hier een goede uitnodigende tekst plaatsen...
                Wilt u op de hoogte blijven van mijn werk in Moldavië? 
                Eens in de zoveel tijd verstuurt mijn thuisfront team 
                een nieuwsbrief waarin ik vertel hoe het met mij gaat 
                en wat we allemaal mogen doen. Wilt u deze ontvangen? 
                Dan kunt u zich opgeven via onderstaand formulier.
            </div>
        )
    }

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col>{this.getText()}</Col>
                </Row>
                <Row className="cw-newsletterblock-form">
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
                            className="btn btn-light btn-block cw-donate-btn">
                                ABONNEREN
                        </a>
                    </Col>
                </Row>
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