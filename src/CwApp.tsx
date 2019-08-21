import React from "react";
import "./Style/CwApp.css";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body";
import { PageTitles } from "./Constants/PageTitles";
import { HomePage } from "./Components/Pages/HomePage";
import { ArchivePage } from "./Components/Pages/ArchivePage";

interface CwAppState{
    mainCurrentPage: string,
    mainTitle: string,
    mainContent: JSX.Element
}

export class CwApp extends React.Component<{}, CwAppState>{
    constructor(props: {}){
        super(props);

        this.state = {
            mainCurrentPage: "home",
            mainTitle: PageTitles.HomePage,
            mainContent: <HomePage />
        }
    }

    setContent(page: string){
        if (page === "home"){
            this.setState({
                mainCurrentPage: page,
                mainTitle: PageTitles.HomePage,
                mainContent: <HomePage />
            })
        }
        else if (page === "archive"){
            this.setState({
                mainCurrentPage: page,
                mainTitle: PageTitles.ArchivePage,
                mainContent: <ArchivePage />
            })
        }
    }

    render(){
        return (
            <React.Fragment>
                <Header headerClick={() => this.setContent("home")}
                        mainCurrentPage={this.state.mainCurrentPage}
                        updateContent={(page: string) => this.setContent(page)} />
                <Body mainContent={this.state.mainContent}
                      mainTitle={this.state.mainTitle}
                      mainCurrentPage={this.state.mainCurrentPage}
                      updateContent={(page: string) => this.setContent(page)} />
            </React.Fragment>
        );
    }
}