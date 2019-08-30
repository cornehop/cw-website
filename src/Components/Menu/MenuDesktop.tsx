import React from "react";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";

interface MenuDesktopProps{
    currentLanguage?: string,
    onLanguageSelect: (eventKey: string) => void
}

export class MenuDesktop extends React.Component<MenuDesktopProps>{
    render(){
        return (
            <ButtonGroup className="cw-header-btn-group">
                <Link className={"btn btn-outline-danger btn-lg"} to="/">Wie is Carlos?</Link>
                <Link className={"btn btn-danger btn-lg"} to="/newsletters">Nieuwsbrieven</Link>
                <LanguageSelector currentLanguage={this.props.currentLanguage}
                                  changeLanguage={(eventKey: string) => this.props.onLanguageSelect(eventKey)} />
            </ButtonGroup>
        )
    }
}