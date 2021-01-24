import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const SupportBlock = () => {
    const { t } = useTranslation();
    return (
        <Container fluid>
            <Row>
                <Col>{t('infobar.support.content')}</Col>
            </Row>
            <Row>
                <Col>
                    <a href="https://www.operatiemobilisatie.nl/carloswessels"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light btn-block cw-donate-btn">
                        {t('infobar.support.donate')}
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default SupportBlock;
