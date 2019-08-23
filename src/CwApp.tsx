import React from "react";
import "./Styles/CwApp.css";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body";
import { BrowserRouter } from "react-router-dom";

export class CwApp extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Header />
                <Body />
            </BrowserRouter>
        );
    }
}