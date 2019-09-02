import React from "react";
import { Helmet } from 'react-helmet'
import { Archive } from "./ArchivePageContent/Archive";
import { Container, Row, Col } from 'react-bootstrap';
import { PageTitles } from "../../Constants/PageTitles";
import { Trans } from "react-i18next";

export class ArchivePage extends React.Component{
    getText(){
        return (
            <Trans i18nKey="archive.content">
                Gedurende mijn verblijf in Moldavië worden er regelmatig filmpjes en 
                nieuwsbrieven gemaakt waarin ik vertel wat ik in Moldavië doe en meemaak.
                Hieronder vind u een overzicht van de eerder verzonden items.
            </Trans>
        );
    }
    
    render(){
        return (
            <React.Fragment>
                <Helmet>
                    <title>Carlos Wessels - Nieuwsbrieven</title>
                    <meta name="description" content="Overzicht van alle eerder verzonden nieuwsbrieven en filmpjes." />
                </Helmet>
                <Container fluid className="content-paragraph">
                    <Row>
                        <Col>
                            <Trans i18nKey="archive.title"><h2>{PageTitles.ArchivePage}</h2></Trans>
                        </Col>
                    </Row>
                    <Row>
                        <Col>{this.getText()}</Col>
                    </Row>
                    <Row>
                        <Archive />
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}