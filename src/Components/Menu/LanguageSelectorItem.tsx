import React from "react";
import { LanguageCodes } from "../../Constants/LanguageCodes";
import { Image } from 'react-bootstrap';
import FlagNL from "../../Assets/nl-flag.png";
import FlagGB from "../../Assets/gb-flag.png";

interface LanguageSelectorItemProps{
    language?: string
}

export class LanguageSelectorItem extends React.Component<LanguageSelectorItemProps>{
    render(){
        return (
            <React.Fragment>
                {this.props.language === LanguageCodes.NL && 
                    <Image src={FlagNL} />
                }
                {this.props.language === LanguageCodes.EN && 
                    <Image src={FlagGB} />
                }
            </React.Fragment>
        )
    }
}