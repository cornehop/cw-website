import React from "react";
import "./Style/CwApp.css";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body";

export class CwApp extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <Body />
            </React.Fragment>
        );
    }
}