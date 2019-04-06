import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import '../../App.scss'
import sum from './s.png'


class Header extends Component {
  render() {
    return (
      <Navbar bg="omar">
      <span>
      <img src={sum} width="90" height="30" alt=""></img>
      </span>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="secondary">Search</Button>
      </Form>
    </Navbar>
      
        )}
}

export default Header;
