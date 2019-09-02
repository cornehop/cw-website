import React from "react";
import { HeaderTitleWithSubTitle } from "./HeaderTitleWithSubTitle";
import "../../Styles/CwAppHeader.css";
import Background from "../../Assets/banner_image.png";
import { Container, Row, Col } from "react-bootstrap";
import { MenuDesktop } from "../Menu/MenuDesktop";
import { MenuMobile } from "../Menu/MenuMobile";

var style = {
    backgroundImage: "url(" + Background + ")"
}

interface HeaderProps{
    currentLanguage?: string,
    onLanguageSelect: (eventKey: string) => void
}

export class Header extends React.Component<HeaderProps>{
    render(){
        return (
            <Container fluid className="cw-header sticky-top">
                <Row>
                    <Col xs={12} md={7} className="cw-header-left">
                        <HeaderTitleWithSubTitle />
                    </Col>
                    <Col xs={0} md={5} className="cw-header-right" style={style}></Col>
                </Row>
                <Row className="d-none d-sm-flex">
                    <MenuDesktop currentLanguage={this.props.currentLanguage}
                                 onLanguageSelect={(eventKey: string) => this.props.onLanguageSelect(eventKey)} />
                </Row>
                <Row className="d-flex flex-row-reverse d-sm-none">
                    <MenuMobile currentLanguage={this.props.currentLanguage}
                                onLanguageSelect={(eventKey: string) => this.props.onLanguageSelect(eventKey)} />
                </Row>
            </Container>
        );
    }
}