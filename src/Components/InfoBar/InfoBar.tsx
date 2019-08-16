import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InfoBlock } from "./InfoBlock";
import { SupportBlock } from "./Blocks/SupportBlock";
import { PageTitles } from "../../Constants/PageTitles";
import { NewsletterBlock } from "./Blocks/NewsletterBlock";

export class InfoBar extends React.Component{
    render(){
        return (
            <Container className="cw-infobar" fluid>
                <Row>
                    <Col>
                        <InfoBlock title={PageTitles.SupportBlock}>
                            <SupportBlock />
                        </InfoBlock>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InfoBlock title={PageTitles.NewsletterBlock}>
                            <NewsletterBlock />
                        </InfoBlock>
                    </Col>
                </Row>
            </Container>
        )
    }
}