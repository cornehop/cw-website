import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ContentWhyMoldova extends React.Component{
    getContentText(){
        return (
            <div>
                Ik ben drie keer eerder in Moldavië geweest: in 2015 en 2017 met een 
                jongerengroep vanuit de Nederlands Gereformeerde Kerk in Zeewolde; en 
                in 2018 met een goede vriend waarbij ik het laatste gedeelte van de 
                reis zelfstandig heb afgelegd. God heeft mij tijdens deze reis tot 
                drie keer ingegeven om naar Moldavië te gaan, twee keer middels een 
                gesprek met mensen die ik tijdens eerdere reizen had ontmoet en aan 
                mij vroegen of ik voor een langere termijn wil komen, en de derde keer 
                tijdens het bidden door middel van een lied dat op de achtergrond aan 
                stond. Drie is het getal van de volheid en komt veel terug in de Bijbel, 
                ik weet zeker dat God dit heeft gebruikt omdat getallen mij erg aanspreken. 
                Na een proces van een aantal jaren voel ik me nu geroepen voor een 
                langere tijd er te gaan wonen.
            </div>
        );
    }
    
    render(){
        return (
            <Container className="content-paragraph" fluid>
                <Row>
                    <Col><h4>Waarom Moldavië?</h4></Col>
                </Row>
                <Row>
                    <Col>{this.getContentText()}</Col>
                </Row>
            </Container>
        );
    }
}