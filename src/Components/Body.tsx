import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Switch, Route } from "react-router";
import ArchivePage from "./Pages/ArchivePage";
import HomePage from "./Pages/HomePage";
import InfoBar from "./InfoBar";

const Body = () => (
    <Container fluid>
        <Row>
            <Col xs={12} sm={6} md={8}>
                <Container fluid className="container-no-space-left">
                    <Row>
                        <Col>
                            <Switch>
                                <Route path='/newsletters' component={ArchivePage} />
                                <Route path='/' component={HomePage} />
                            </Switch>
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

export default Body;
