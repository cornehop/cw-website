import React from "react";
import { ButtonGroup, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { Trans } from "react-i18next";

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
                                drop="left"
                                id="menu-dropdown">
                    <Link className="dropdown-item" to="/"><Trans i18nKey="menu.home">Wie is Carlos?</Trans></Link>
                    <Link className="dropdown-item" to="/newsletters"><Trans i18nKey="menu.archive">Nieuwsbrieven</Trans></Link>
                </DropdownButton>
                {/* <LanguageSelector currentLanguage={this.props.currentLanguage}
                                  changeLanguage={(eventKey: string) => this.props.onLanguageSelect(eventKey)} /> */}
            </ButtonGroup>
        )
    }
}