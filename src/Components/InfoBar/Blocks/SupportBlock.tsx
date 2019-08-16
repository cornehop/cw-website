import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class SupportBlock extends React.Component{
    getText(){
        return (
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ultrices sagittis ultricies. Morbi ultrices ipsum 
                iaculis nisi lobortis imperdiet. Phasellus at ligula a 
                lectus sagittis fermentum. Morbi in mi est. Curabitur vel 
                elementum nulla, scelerisque vulputate dui. Nullam interdum, 
                magna vel faucibus gravida, dolor odio fringilla lectus, a 
                mollis velit augue in erat. Interdum et malesuada fames ac 
                ante ipsum primis in faucibus. Vivamus eget rutrum justo.
            </div>
        )
    }

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col>{this.getText()}</Col>
                </Row>
                <Row>
                    <Col>
                        <a href="https://www.operatiemobilisatie.nl/carloswessels" 
                           target="_blank"
                           className="btn btn-light btn-block cw-donate-btn">
                               DONEREN
                        </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}