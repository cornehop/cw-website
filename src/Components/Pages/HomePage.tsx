import React from "react";
import { ContentWhoIsCarlos } from "./HomePageContent/ContentWhoIsCarlos";
import { ContentWhyMoldova } from "./HomePageContent/ContentWhyMoldova";
import { Container, Row, Col } from "react-bootstrap";
import { PageTitles } from "../../Constants/PageTitles";

export class HomePage extends React.Component{
    render(){
        return (
            <Container className="content-paragraph">
                <Row>
                    <Col>
                        <h2>{PageTitles.HomePage}</h2>
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
        );
    }
}