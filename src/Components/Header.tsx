import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../Assets/banner_image.png";
import MenuDesktop from "./Menu/MenuDesktop";
import MenuMobile from "./Menu/MenuMobile";
import "../Styles/CwAppHeader.css";

var style = {
    backgroundImage: "url(" + Background + ")"
}

const Header = () => {
    const { t } = useTranslation();
    return (
        <Container fluid className="cw-header sticky-top">
            <Row>
                <Col xs={12} md={7} className="cw-header-left">
                    <div>
                        <Link to="/"><h1>Carlos Wessels</h1></Link>
                        <h3>{t('header.subtitle')}</h3>
                    </div>
                </Col>
                <Col xs={0} md={5} className="cw-header-right" style={style}></Col>
            </Row>
            <Row className="d-none d-sm-flex">
                <MenuDesktop />
            </Row>
            <Row className="d-flex flex-row-reverse d-sm-none">
                <MenuMobile />
            </Row>
        </Container>
    );
};

export default Header;
