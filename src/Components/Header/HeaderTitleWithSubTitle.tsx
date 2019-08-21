import React from "react";

interface HeaderTitleWithSubTitleProps{
    headerClick: () => void;
}

export class HeaderTitleWithSubTitle extends React.Component<HeaderTitleWithSubTitleProps>{
    render(){
        return (
            <div>
                <h1 onClick={this.props.headerClick}>Carlos Wessels</h1>
                <h3>Zendingswerker bij Operatie Mobilisatie in Moldavië</h3>
            </div>
        );
    }
}