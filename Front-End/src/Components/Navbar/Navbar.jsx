import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
 <Container>
        <Navbar.Brand href="/">DevBnb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/Reservations">Reservations</Nav.Link>
            <Nav.Link href="/Support">Support</Nav.Link>
           
            <NavDropdown title="Login" id="basic-nav-dropdown" className='dropdown'>

              <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/Register">Register</NavDropdown.Item>

            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;