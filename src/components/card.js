import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Formulario from "../components/form";
import { Link } from 'react-router-dom';

class Tarjeta extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.Imagen} />
          <Card.Body>
            <Card.Title>{this.props.Name}</Card.Title>
            <Card.Text>
              {this.props.Corp}
            </Card.Text>
            <Button href='form' variant="primary">Reservar</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Tarjeta;