import React from "react";
import { DropdownButton, ButtonGroup, Dropdown, Image } from "react-bootstrap";
import i18n from '../../i18n';
import { defaultLanguage, LanguageCodes, languageLocalStorageKey } from "../../Domain/LanguageCodes";
import useLocalstorage from "../../Hooks/useLocalstorage";
import FlagNL from "../../Assets/nl-flag.png";
import FlagGB from "../../Assets/gb-flag.png";

const LanguageSelector = () => {
    const [currentLanguage, setCurrentLanguageState] = useLocalstorage(languageLocalStorageKey, defaultLanguage);
    const setCurrentLanguage = (eventKey: string) => {
        setCurrentLanguageState(eventKey);
        i18n.changeLanguage(eventKey);
    }

    const getCurrentLanguage = () => {
        if (currentLanguage === LanguageCodes.EN) {
            return (<Image src={FlagGB} />);
        }

        return (<Image src={FlagNL} />);
    }

    return (
        <DropdownButton as={ButtonGroup}
            title={getCurrentLanguage()}
            variant="outline-danger"
            id="language-dropdown">
            <Dropdown.Item eventKey={LanguageCodes.NL} onSelect={setCurrentLanguage}>
                <Image src={FlagNL} />
            </Dropdown.Item>
            <Dropdown.Item eventKey={LanguageCodes.EN} onSelect={setCurrentLanguage}>
                <Image src={FlagGB} />
            </Dropdown.Item>
        </DropdownButton>
    );
}

export default LanguageSelector;