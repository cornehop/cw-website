import React from "react";
import { LanguageCodes } from "../../Constants/LanguageCodes";

interface LanguageSelectorItemProps{
    language?: string
}

export class LanguageSelectorItem extends React.Component<LanguageSelectorItemProps>{
    render(){
        return (
            <React.Fragment>
                {this.props.language === LanguageCodes.NL && <div>NL :)</div>}
                {this.props.language === LanguageCodes.EN && <div>EN :)</div>}
            </React.Fragment>
        )
    }
}