import React from "react";
import { Archive } from "./ArchivePageContent/Archive";
import { Container, Row, Col } from 'react-bootstrap';

export class ArchivePage extends React.Component{
    getText(){
        return (
            <div>
                Gedurende mijn verblijf in Moldavië worden er regelmatig filmpjes en 
                nieuwsbrieven gemaakt waarin ik vertel wat ik in Moldavië doe en meemaak.
                Hieronder vind u een overzicht van de eerder verzonden items.
            </div>
        );
    }
    
    render(){
        return (
            <Container fluid className="content-paragraph">
                <Row>
                    <Col>{this.getText()}</Col>
                </Row>
                <Row>
                    <Archive />
                </Row>
            </Container>
        )
    }
}