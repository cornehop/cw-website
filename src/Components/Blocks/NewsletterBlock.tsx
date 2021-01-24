import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Trans, useTranslation } from "react-i18next";

const NewsletterBlock = () => {
    const { t } = useTranslation();
    const getSubscribtionEmailLink = () => {
        const email = "pr@carloswessels.nl";
        const subject = "Abonneren op de nieuwsbrief";
        let href = "mailto:" + email + "?subject=" + subject;

        return (
            <a href={href}>{email}</a>
        );
    };

    const getText = () => (
        <Trans i18nKey="infobar.keepupdated.content">
            Gedurende mijn verblijf in Moldavië worden er regelmatig
            filmpjes en nieuwsbrieven gemaakt waarin ik vertel wat ik
            in Moldavië doe en meemaak. Wilt u hiervan op de hoogte
            blijven? Dan kunt u zich aanmelden door een e-mail te sturen naar: {getSubscribtionEmailLink()}.
        </Trans>
    );

    return (
        <Container fluid>
            <Row>
                <Col>{getText()}</Col>
            </Row>
            <Row>
                <Col>
                    <small className="text-muted">{t('infobar.keepupdated.bottomnote')}</small>
                </Col>
            </Row>
        </Container>
    );
}

export default NewsletterBlock;
