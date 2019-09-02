import React from "react";
import "./Styles/CwApp.css";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body";
import { BrowserRouter } from "react-router-dom";
import store, { CwAppState } from "./Store/ConfigureStore";
import { ReduxActionTypes } from "./Store/ActionTypes";
import i18n from './i18n';
import { connect } from "react-redux";

interface CwAppProps{
    currentLanguage?: string
}

class CwApp extends React.Component<CwAppProps>{
    onLanguageSelect(eventKey: string){
        store.dispatch({ type: ReduxActionTypes.SET_UI_LANGUAGE, data: eventKey });
        i18n.changeLanguage(eventKey);
    }

    render(){
        return (
            <BrowserRouter>
                <Header currentLanguage={this.props.currentLanguage}
                        onLanguageSelect={(eventKey: string) => this.onLanguageSelect(eventKey)} />
                <Body />
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state: CwAppState){
    return {
        currentLanguage: state.uiLanguage
    }
}

export default connect(mapStateToProps)(CwApp);