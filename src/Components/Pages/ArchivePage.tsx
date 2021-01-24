import React from "react";
// TODO CH: enable Helmet
// import { Helmet } from 'react-helmet'
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap';
import { ArchiveBlock } from "../Blocks/ArchiveBlock";

const ArchivePage = () => {
    const { t } = useTranslation();
    return (
        <Container fluid className="content-paragraph">
            <Row>
                <Col><h2>{t('archive.title')}</h2></Col>
            </Row>
            <Row>
                <Col>{t('archive.content')}</Col>
            </Row>
            <Row>
                <Container className="cw-archive-container" fluid>
                    <Row>
                        <Col>
                            <ArchiveBlock />
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default ArchivePage;
