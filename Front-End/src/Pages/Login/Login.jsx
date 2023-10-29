import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css'
import Container from 'react-bootstrap/esm/Container';


function TextControlsExample() {
  return (
    
    <Container className='login' >

    <Form className=''>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>

     
      {/* <Link href="/Register">Register</Link> */}

      <Button >Log In</Button>
   
      
    </Form>

   </Container>
  );
}

export default TextControlsExample;