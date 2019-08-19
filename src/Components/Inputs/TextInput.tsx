import React from "react";

interface TextInputProps{
    id: string
}

export class TextInput extends React.Component<TextInputProps>{
    render (){
        return (
            <input type="text"
                   id={this.props.id}
                   className="form-control" />
        )
    }
}