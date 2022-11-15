import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Tarjeta extends React.Component {
  render(){
    return (
      <div>
        <br></br>
          <Card style={{ }}>
            <Card.Img variant="top" src={this.props.Imagen}/>
            <Card.Body>
              <Card.Title>{this.props.Name}</Card.Title>
              <Card.Text>
                {this.props.Corp}
              </Card.Text>
              <Button variant="primary">Reservar</Button>
            </Card.Body>
          </Card>
      </div>
      );
  }
}

export default Tarjeta;