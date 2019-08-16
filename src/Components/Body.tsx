import React from "react";
import { MainContent } from "./MainContent";
import { HomePage } from "./Pages/HomePage";
import { PageTitles } from "../Constants/PageTitles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface BodyState{
    mainTitle: string,
    mainContent: JSX.Element
}

export class Body extends React.Component<{}, BodyState>{
    constructor(props: {}){
        super(props);

        this.state = {
            mainTitle: PageTitles.HomePage,
            mainContent: <HomePage />
        }
    }

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        {/* TODO CREATE LEFT CONTENT */}
                    </Col>
                    <Col xs={8}>
                        <MainContent pageTitle={this.state.mainTitle}
                                     pageContent={this.state.mainContent} />
                    </Col>
                </Row>
            </Container>
        );
    }
}