import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, DropdownButton, Dropdown, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { CwAppState } from "../Store/ConfigureStore";
import store from "../Store/ConfigureStore";
import { ReduxActionTypes } from "../Store/ActionTypes";
import { LanguageSelector } from "./Menu/LanguageSelector";

interface MenuProps{
    currentLanguage?: string
}

class Menu extends React.Component<MenuProps>{
    private onLanguageSelect(eventKey: string){
        store.dispatch({ type: ReduxActionTypes.SET_UI_LANGUAGE, data: eventKey });
    }
    
    render(){
        return (
            <ButtonGroup className="cw-header-btn-group">
                <Link className={"btn btn-outline-danger btn-lg"} to="/">Wie is Carlos?</Link>
                <Link className={"btn btn-danger btn-lg"} to="/newsletters">Nieuwsbrieven</Link>
                <LanguageSelector currentLanguage={this.props.currentLanguage}
                                  changeLanguage={(eventKey: string) => this.onLanguageSelect(eventKey)} />
            </ButtonGroup>
        )
    }
}

function mapStateToProps(state: CwAppState){
    return {
        currentLanguage: state.uiLanguage
    }
}

export default connect(mapStateToProps)(Menu);