import React from "react";
import { MainContent } from "./MainContent";
import { HomePage } from "./Pages/HomePage";
import { PageTitles } from "../Constants/PageTitles";

interface BodyState{
    mainTitle: string,
    mainContent: JSX.Element
}

export class Body extends React.Component<{}, BodyState>{
    constructor(props: {}){
        super(props);

        this.state = {
            mainTitle: PageTitles.HomePage,
            mainContent: <HomePage />
        }
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        {/* TODO CREATE LEFT CONTENT */}
                    </div>
                    <div className="col-8">
                        <MainContent pageTitle={this.state.mainTitle}
                                     pageContent={this.state.mainContent} />
                    </div>
                </div>
            </div>
        );
    }
}