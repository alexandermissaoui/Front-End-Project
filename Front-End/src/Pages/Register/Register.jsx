import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/esm/Container';
import './register.css'


function TextControlsExample() {
  return (

    <Container className='register'>

    <Form className=''>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstName" placeholder="Kalle" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastName" placeholder="Karlssson" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  />
        
      </Form.Group>

      <Button >Create User</Button>

      </Form>

         {/* 
      <Button >Create User</Button>
      <Link href="/Log In">Register</Link>
    */}

      </Container>

   
      
   
    
  );
}

export default TextControlsExample;