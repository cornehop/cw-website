import React from "react";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

interface MenuDesktopProps{
    currentLanguage?: string,
    onLanguageSelect: (eventKey: string) => void
}

export class MenuDesktop extends React.Component<MenuDesktopProps>{
    render(){
        return (
            <ButtonGroup className="cw-header-btn-group">
                <Link className={"btn btn-outline-danger btn-lg"} to="/"><Trans i18nKey="menu.home">Wie is Carlos?</Trans></Link>
                <Link className={"btn btn-danger btn-lg"} to="/newsletters"><Trans i18nKey="menu.archive">Nieuwsbrieven</Trans></Link>
                {/* <LanguageSelector currentLanguage={this.props.currentLanguage}
                                  changeLanguage={(eventKey: string) => this.props.onLanguageSelect(eventKey)} /> */}
            </ButtonGroup>
        )
    }
}