import React from "react";

interface EmailInputProps{
    id: string
}

export class EmailInput extends React.Component<EmailInputProps>{
    render (){
        return (
            <input type="email"
                   id={this.props.id}
                   className="form-control" />
        )
    }
}