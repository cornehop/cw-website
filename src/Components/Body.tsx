import React from "react";
import { MainContent } from "./MainContent";
import { Container, Row, Col } from 'react-bootstrap';
import { InfoBar } from "./InfoBar/InfoBar";
import { Menu } from "./Menu";

interface BodyProps{
    mainCurrentPage: string,
    mainTitle: string,
    mainContent: JSX.Element,
    updateContent: (page: string) => void;
}

export class Body extends React.Component<BodyProps>{
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col xs={12} sm={6} md={8}>
                        <Container fluid className="container-no-space-left">
                            <Row>
                                <Col>
                                    <MainContent pageTitle={this.props.mainTitle}
                                                 pageContent={this.props.mainContent} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <InfoBar />
                    </Col>
                </Row>
            </Container>
        );
    }
}