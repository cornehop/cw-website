import React from "react";
import { Link } from "react-router-dom";

export class HeaderTitleWithSubTitle extends React.Component{
    render(){
        return (
            <div>
                <Link to="/"><h1>Carlos Wessels</h1></Link>
                <h3>Zendingswerker bij Operatie Mobilisatie in Moldavië</h3>
            </div>
        );
    }
}