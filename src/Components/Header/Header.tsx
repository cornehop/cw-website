import React from "react";
import { HeaderTitleWithSubTitle } from "./HeaderTitleWithSubTitle";
import "../../Style/CwAppHeader.css";
import { HeaderFooter } from "./HeaderFooter";
import Background from "../../Assets/banner_image.png";

var style = {
    backgroundImage: "url(" + Background + ")"
}

export class Header extends React.Component{
    render(){
        return (
            <div style={style} className="container-fluid cw-header">
                <div className="row cw-header-titles">
                    <div className="col-12">
                        <HeaderTitleWithSubTitle />
                    </div>
                    <div className="col-12 cw-header-footer">
                        <HeaderFooter />
                    </div>
                </div>
            </div>
        );
    }
}