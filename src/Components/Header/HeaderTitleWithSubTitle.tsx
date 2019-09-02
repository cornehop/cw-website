import React from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

export class HeaderTitleWithSubTitle extends React.Component{
    render(){
        return (
            <div>
                <Link to="/"><h1>Carlos Wessels</h1></Link>
                <Trans i18nKey="header.subtitle"><h3>Zendingswerker bij Operatie Mobilisatie in Moldavië</h3></Trans>
            </div>
        );
    }
}