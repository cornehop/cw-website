import React from "react";

interface HeaderTitleWithSubTitleProps{
    headerClick: () => void;
}

export class HeaderTitleWithSubTitle extends React.Component<HeaderTitleWithSubTitleProps>{
    render(){
        return (
            <div>
                <a onClick={this.props.headerClick}><h1>Carlos Wessels</h1></a>
                <h3>Zendingswerker bij Operatie Mobilisatie in Moldavië</h3>
            </div>
        );
    }
}