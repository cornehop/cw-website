import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

interface MainContentProps{
    pageTitle: string,
    pageContent: JSX.Element
}

export class MainContent extends React.Component<MainContentProps>{
    render(){
        return (
            <Container fluid className="container-no-space-left">
                <Row>
                    <Col>
                        <h2>{this.props.pageTitle}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.pageContent}
                    </Col>
                </Row>
            </Container>
        );
    }
}