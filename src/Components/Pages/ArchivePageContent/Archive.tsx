import React from "react";
// import { ArchiveFilter } from "./ArchiveFilter";
import { ArchiveTable } from "./ArchiveTable";
import { Container, Row, Col } from 'react-bootstrap';

export class Archive extends React.Component{
    render(){
        return (
            <Container fluid>
                <Row>
                    {/* <Col><ArchiveFilter /></Col> */}
                    <Col><ArchiveTable /></Col>
                </Row>
            </Container>
        )
    }
}