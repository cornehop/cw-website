import React from "react";
import { ContentWhoIsCarlos } from "./HomePageContent/ContentWhoIsCarlos";
import { ContentWhyMoldova } from "./HomePageContent/ContentWhyMoldova";

export class HomePage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <ContentWhoIsCarlos />
                <ContentWhyMoldova />
            </React.Fragment>
        );
    }
}