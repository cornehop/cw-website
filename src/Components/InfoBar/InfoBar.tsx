import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
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
                        <InfoBlock title={PageTitles.SupportBlock} titleTransKey="infobar.support.title">
                            <SupportBlock />
                        </InfoBlock>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InfoBlock title={PageTitles.NewsletterBlock} titleTransKey="infobar.keepupdated.title">
                            <NewsletterBlock />
                        </InfoBlock>
                    </Col>
                </Row>
            </Container>
        )
    }
}