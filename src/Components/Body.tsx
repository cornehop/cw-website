import React from "react";
import { MainContent } from "./MainContent";
import { HomePage } from "./Pages/HomePage";
import { PageTitles } from "../Constants/PageTitles";
import { Container, Row, Col } from 'react-bootstrap';
import { InfoBar } from "./InfoBar/InfoBar";
import { ArchivePage } from "./Pages/ArchivePage";
import { Menu } from "./Menu";

interface BodyState{
    mainCurrentPage: string,
    mainTitle: string,
    mainContent: JSX.Element
}

export class Body extends React.Component<{}, BodyState>{
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
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <InfoBar />
                    </Col>
                    <Col xs={8}>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Menu currentPage={this.state.mainCurrentPage}
                                          homeClick={() => this.setContent("home")}
                                          archiveClick={() => this.setContent("archive")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <MainContent pageTitle={this.state.mainTitle}
                                                 pageContent={this.state.mainContent} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}