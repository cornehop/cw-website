import React from "react";
import { HeaderTitleWithSubTitle } from "./HeaderTitleWithSubTitle";
import "../../Style/CwAppHeader.css";
import Background from "../../Assets/banner_image.png";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "../Menu";

var style = {
    backgroundImage: "url(" + Background + ")"
}

interface HeaderProps{
    headerClick: () => void;
    mainCurrentPage: string;
    updateContent: (page: string) => void;
}

export class Header extends React.Component<HeaderProps>{
    render(){
        return (
            <Container fluid className="cw-header sticky-top">
                <Row>
                    <Col xs={12} md={6} className="cw-header-left">
                        <HeaderTitleWithSubTitle headerClick={this.props.headerClick} />
                    </Col>
                    <Col xs={0} md={6} className="cw-header-right" style={style}></Col>
                </Row>
                <Row>
                    <Menu currentPage={this.props.mainCurrentPage}
                          homeClick={() => this.props.updateContent("home")}
                          archiveClick={() => this.props.updateContent("archive")} />
                </Row>
            </Container>
        );
    }
}