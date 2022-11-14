import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from "react-router-dom";

class NavBar extends React.Component {
  render(){
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">{this.props.Name}</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">{this.props.First}</Nav.Link>
              <Nav.Link href="#">{this.props.Second}</Nav.Link>
              <Nav.Link href="/about">{this.props.Third}</Nav.Link>
              <Nav.Link href="#">{this.props.Fourths}</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </>
    );
  }
}

export default NavBar;
