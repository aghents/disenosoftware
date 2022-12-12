import React from 'react';
import Card from 'react-bootstrap/Card';


class Perfil extends React.Component {
  render(){
    return (
      <div>
        <br></br>
          <Card style={{ color:'black', textAlign:'justify'}}>
            <Card.Img class='img-fluid' variant="top" src={this.props.Imagen} />
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}><center>{this.props.Name}</center></Card.Title>
              <Card.Text style={{textAlign:'start'}}>
                <center>{this.props.Corp}</center>
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
    );
  }
}

export default Perfil;