import React from "react";
import { HeaderTitleWithSubTitle } from "./HeaderTitleWithSubTitle";
import "../../Style/CwAppHeader.css";
import { HeaderFooter } from "./HeaderFooter";
import Background from "../../Assets/banner_image.png";
import { Navbar, Container, Row, Col } from "react-bootstrap";

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
                </Container>
        );
    }
}