import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/esm/Container';
import './footer.css'


function ListExample() {
  return (
    <Container className='footer'>
    <Nav defaultActiveKey="/home" as="ul" >
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/About">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Bookings">Bookings</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Support">Support</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Login">Log In</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Register">Register</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>

  );
}

export default ListExample;