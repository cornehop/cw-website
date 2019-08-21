import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap';

interface MenuProps{
    currentPage: string;
    homeClick: () => void;
    archiveClick: () => void;
}

export class Menu extends React.Component<MenuProps>{
    render(){
        return (
            <ButtonGroup className="cw-menu">
                <Button size="lg" 
                        variant={this.props.currentPage === "home" ? "outline-danger" : "danger"}
                        onClick={this.props.homeClick}>
                            Wie is Carlos?
                </Button>
                <Button size="lg"
                        variant={this.props.currentPage === "archive" ? "outline-danger" : "danger"}
                        onClick={this.props.archiveClick}>
                            Nieuwsbrieven
                </Button>
            </ButtonGroup>
        )
    }
}