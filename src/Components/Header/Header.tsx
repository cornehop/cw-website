import React from "react";
import { HeaderTitleWithSubTitle } from "./HeaderTitleWithSubTitle";
import "../../Styles/CwAppHeader.css";
import Background from "../../Assets/banner_image.png";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "../Menu";

var style = {
    backgroundImage: "url(" + Background + ")"
}

export class Header extends React.Component{
    render(){
        return (
            <Container fluid className="cw-header sticky-top">
                <Row>
                    <Col xs={12} md={6} className="cw-header-left">
                        <HeaderTitleWithSubTitle />
                    </Col>
                    <Col xs={0} md={6} className="cw-header-right" style={style}></Col>
                </Row>
                <Row>
                    <Menu />
                </Row>
            </Container>
        );
    }
}