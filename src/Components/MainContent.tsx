import React from "react";

interface MainContentProps{
    pageTitle: string,
    pageContent: JSX.Element
}

export class MainContent extends React.Component<MainContentProps>{
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>{this.props.pageTitle}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {this.props.pageContent}
                    </div>
                </div>
            </div>
        );
    }
}