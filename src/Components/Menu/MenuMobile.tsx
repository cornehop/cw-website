import React from "react";
import { ButtonGroup, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const MenuMobile = () => {
    const { t } = useTranslation();
    return (
        <ButtonGroup className="cw-header-btn-group d-inline-flex d-sm-none text-right">
            <DropdownButton as={ButtonGroup}
                title={<TiThMenu />}
                variant="outline-danger"
                drop="left"
                id="menu-dropdown">
                <Link className="dropdown-item" to="/">{t('menu.home')}</Link>
                <Link className="dropdown-item" to="/newsletters">{t('menu.archive')}</Link>
            </DropdownButton>
            <LanguageSelector />
        </ButtonGroup>
    )
}

export default MenuMobile;
