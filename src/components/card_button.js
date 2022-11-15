import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Tarjeta extends React.Component {
  render(){
    return (
      <div>
        <br></br>
          <Card style={{textAlign:'justify'}}>
            <Card.Img variant="top" src={this.props.Imagen}/>
            <Card.Body>
              <Card.Title>{this.props.Name}</Card.Title>
              <Card.Text>
                {this.props.Corp}
              </Card.Text>
              <center><Button variant="outline-success" href='/form'>Reservar</Button></center>
            </Card.Body>
          </Card>
      </div>
      );
  }
}

export default Tarjeta;