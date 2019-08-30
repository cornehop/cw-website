import React from "react";
import { ButtonGroup, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { TiThMenu } from "react-icons/ti";

interface MenuMobileProps{
    currentLanguage?: string,
    onLanguageSelect: (eventKey: string) => void
}

export class MenuMobile extends React.Component<MenuMobileProps>{
    render(){
        return (
            <ButtonGroup className="cw-header-btn-group d-inline-flex d-sm-none text-right">
                <DropdownButton as={ButtonGroup}
                                title={<TiThMenu />}
                                variant="outline-danger"
                                id="menu-dropdown">
                    <Link className="dropdown-item" to="/">Wie is Carlos?</Link>
                    <Link className="dropdown-item" to="/newsletters">Nieuwsbrieven</Link>
                </DropdownButton>
                <LanguageSelector currentLanguage={this.props.currentLanguage}
                                  changeLanguage={(eventKey: string) => this.props.onLanguageSelect(eventKey)} />
            </ButtonGroup>
        )
    }
}