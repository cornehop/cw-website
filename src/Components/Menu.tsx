import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup } from "react-bootstrap";

export class Menu extends React.Component{    
    render(){
        return (
            <ButtonGroup>
                <Link className={"btn btn-outline-danger btn-lg"} to="/">Wie is Carlos?</Link>
                <Link className={"btn btn-danger btn-lg"} to="/newsletters">Nieuwsbrieven</Link>
            </ButtonGroup>
        )
    }
}