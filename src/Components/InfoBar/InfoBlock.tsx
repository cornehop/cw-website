import React from "react";
import Card from 'react-bootstrap/Card'

interface InfoBlockProps{
    title: string
}

export class InfoBlock extends React.Component<InfoBlockProps>{
    render(){
        return (
            <Card bg="primary">
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    {this.props.children}
                </Card.Body>
            </Card>
        )
    }
}