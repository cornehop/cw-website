import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

interface MainContentProps{
    pageTitle: string,
    pageContent: JSX.Element
}

export class MainContent extends React.Component<MainContentProps>{
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <h2>{this.props.pageTitle}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        {this.props.pageContent}
                    </Col>
                </Row>
            </Container>
        );
    }
}