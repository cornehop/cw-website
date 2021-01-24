import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "./Styles/CwApp.css";

const CwApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Body />
        </BrowserRouter>
    )
}

export default CwApp;