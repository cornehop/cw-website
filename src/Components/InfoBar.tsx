import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import SupportBlock from "./Blocks/SupportBlock";
import NewsletterBlock from "./Blocks/NewsletterBlock";

const InfoBar = () => {
    const { t } = useTranslation();
    return (
        <Container className="cw-infobar" fluid>
            <Row>
                <Col>
                    <Card bg="primary">
                        <Card.Header>{t('infobar.support.title')}</Card.Header>
                        <Card.Body>
                            <SupportBlock />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card bg="primary">
                        <Card.Header>{t('infobar.keepupdated.title')}</Card.Header>
                        <Card.Body>
                            <NewsletterBlock />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoBar;
