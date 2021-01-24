import React from "react";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const MenuDesktop = () => {
    const { t } = useTranslation();
    return (
        <ButtonGroup className="cw-header-btn-group">
            <Link className={"btn btn-outline-danger btn-lg"} to="/">{t('menu.home')}</Link>
            <Link className={"btn btn-danger btn-lg"} to="/newsletters">{t('menu.archive')}</Link>
            <LanguageSelector />
        </ButtonGroup>
    );
};

export default MenuDesktop;
