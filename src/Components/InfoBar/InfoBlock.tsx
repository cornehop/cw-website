import React from "react";
import { Card } from 'react-bootstrap'
import { Trans } from "react-i18next";

interface InfoBlockProps{
    title: string,
    titleTransKey: string
}

export class InfoBlock extends React.Component<InfoBlockProps>{
    render(){
        return (
            <Card bg="primary">
                <Card.Header><Trans i18nKey={this.props.titleTransKey}>{this.props.title}</Trans></Card.Header>
                <Card.Body>
                    {this.props.children}
                </Card.Body>
            </Card>
        )
    }
}