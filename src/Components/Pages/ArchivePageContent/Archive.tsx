import React from "react";
import { ArchiveTable } from "./ArchiveTable";
import { Container, Row, Col } from 'react-bootstrap';

export class Archive extends React.Component{
    render(){
        return (
            <Container className="cw-archive-container" fluid>
                <Row>
                    <Col><ArchiveTable /></Col>
                </Row>
            </Container>
        )
    }
}