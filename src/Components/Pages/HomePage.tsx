import React from "react";
import { useTranslation } from 'react-i18next';
// import { Helmet } from 'react-helmet'
// TODO CH: restore react-helmet
import { WhoIsCarlosBlock } from "../Blocks/WhoIsCarlosBlock";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Container className="content-paragraph" fluid>
                <Row>
                    <Col>
                        <h2>{t('homepage.title')}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <WhoIsCarlosBlock />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="content-paragraph" fluid>
                            <Row>
                                <Col><h4>{t('homepage.title.whymoldova')}</h4></Col>
                            </Row>
                            <Row>
                                <Col>{t('homepage.whymoldova')}</Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HomePage;