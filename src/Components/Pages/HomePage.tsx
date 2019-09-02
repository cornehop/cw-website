import React from "react";
import { Helmet } from 'react-helmet'
import { ContentWhoIsCarlos } from "./HomePageContent/ContentWhoIsCarlos";
import { ContentWhyMoldova } from "./HomePageContent/ContentWhyMoldova";
import { Container, Row, Col } from "react-bootstrap";
import { PageTitles } from "../../Constants/PageTitles";
import { Trans } from "react-i18next";

export class HomePage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Helmet>
                    <title>Carlos Wessels</title>
                    <meta name="description" content="Carlos Wessels: zendingswerker voor Operatie Mobilisatie in Moldavië" />
                </Helmet>

                <Container className="content-paragraph" fluid>
                    <Row>
                        <Col>
                            <Trans i18nKey={"homepage.title"}><h2>{PageTitles.HomePage}</h2></Trans>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ContentWhoIsCarlos />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ContentWhyMoldova />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}