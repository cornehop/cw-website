import React from "react";
import { HeaderTitleWithSubTitle } from "./HeaderTitleWithSubTitle";
import "../../Styles/CwAppHeader.css";
import Background from "../../Assets/banner_image.png";
import { Container, Row, Col } from "react-bootstrap";
import store, { CwAppState } from "../../Store/ConfigureStore";
import { ReduxActionTypes } from "../../Store/ActionTypes";
import { MenuDesktop } from "../Menu/MenuDesktop";
import { MenuMobile } from "../Menu/MenuMobile";
import { connect } from "react-redux";

var style = {
    backgroundImage: "url(" + Background + ")"
}

interface HeaderProps{
    currentLanguage?: string
}

class Header extends React.Component<HeaderProps>{
    private onLanguageSelect(eventKey: string){
        store.dispatch({ type: ReduxActionTypes.SET_UI_LANGUAGE, data: eventKey });
    }

    render(){
        return (
            <Container fluid className="cw-header sticky-top">
                <Row>
                    <Col xs={12} md={6} className="cw-header-left">
                        <HeaderTitleWithSubTitle />
                    </Col>
                    <Col xs={0} md={6} className="cw-header-right" style={style}></Col>
                </Row>
                <Row className="d-none d-sm-flex">
                    <MenuDesktop currentLanguage={this.props.currentLanguage}
                                 onLanguageSelect={(eventKey: string) => this.onLanguageSelect(eventKey)} />
                </Row>
                <Row className="d-flex flex-row-reverse d-sm-none">
                    <MenuMobile currentLanguage={this.props.currentLanguage}
                                onLanguageSelect={(eventKey: string) => this.onLanguageSelect(eventKey)} />
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state: CwAppState){
    return {
        currentLanguage: state.uiLanguage
    }
}

export default connect(mapStateToProps)(Header);