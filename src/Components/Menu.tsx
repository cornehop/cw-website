import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, DropdownButton, Dropdown, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { CwAppState } from "../Store/ConfigureStore";
import store from "../Store/ConfigureStore";
import { ReduxActionTypes } from "../Store/ActionTypes";

interface MenuProps{
    currentLanguage?: string
}

class Menu extends React.Component<MenuProps>{
    private onLanguageSelect(eventKey: string){
        store.dispatch({ type: ReduxActionTypes.SET_UI_LANGUAGE, data: eventKey });
    }
    
    render(){
        return (
            <React.Fragment>
                <Col xs={0} md={12}>
                    <ButtonGroup className="cw-header-btn-group">
                        <Link className={"btn btn-outline-danger btn-lg"} to="/">Wie is Carlos?</Link>
                        <Link className={"btn btn-danger btn-lg"} to="/newsletters">Nieuwsbrieven</Link>
                        <DropdownButton as={ButtonGroup} title={this.props.currentLanguage} variant="outline-danger" id="language-dropdown">
                            <Dropdown.Item eventKey="nl-NL" onSelect={this.onLanguageSelect}>NL</Dropdown.Item>
                            <Dropdown.Item eventKey="en-EN" onSelect={this.onLanguageSelect}>EN</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Col>
                <Col xs={12} md={0}>
                    <ButtonGroup className="cw-header-btn-group">
                        <Link className={"btn btn-outline-danger btn-lg"} to="/">Bla</Link>
                        <Link className={"btn btn-danger btn-lg"} to="/newsletters">Bla</Link>
                        <DropdownButton as={ButtonGroup} title={this.props.currentLanguage} variant="outline-danger" id="language-dropdown">
                            <Dropdown.Item eventKey="nl-NL" onSelect={this.onLanguageSelect}>NL</Dropdown.Item>
                            <Dropdown.Item eventKey="en-EN" onSelect={this.onLanguageSelect}>EN</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Col>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state: CwAppState){
    return {
        currentLanguage: state.uiLanguage
    }
}

export default connect(mapStateToProps)(Menu);