import React from "react";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import { LanguageCodes } from "../../Constants/LanguageCodes";
import { LanguageSelectorItem } from "./LanguageSelectorItem";

interface LanguageSelectorProps{
    currentLanguage?: string,
    changeLanguage: (eventKey: string) => void
}

export class LanguageSelector extends React.Component<LanguageSelectorProps>{
    render(){
        return (
            <DropdownButton as={ButtonGroup}
                            title={<LanguageSelectorItem language={this.props.currentLanguage} />}
                            variant="outline-danger"
                            id="language-dropdown">
                <Dropdown.Item eventKey={LanguageCodes.NL} onSelect={this.props.changeLanguage}>
                    <LanguageSelectorItem language={LanguageCodes.NL} />
                </Dropdown.Item>
                <Dropdown.Item eventKey={LanguageCodes.EN} onSelect={this.props.changeLanguage}>
                    <LanguageSelectorItem language={LanguageCodes.EN} />
                </Dropdown.Item>
            </DropdownButton>
        )
    }
}