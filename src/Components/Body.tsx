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
                    <Col xs={4}>
                        <InfoBar />
                    </Col>
                    <Col xs={8}>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Menu currentPage={this.props.mainCurrentPage}
                                          homeClick={() => this.props.updateContent("home")}
                                          archiveClick={() => this.props.updateContent("archive")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <MainContent pageTitle={this.props.mainTitle}
                                                 pageContent={this.props.mainContent} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}