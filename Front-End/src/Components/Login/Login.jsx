import React from 'react';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css'

function TextControlsExample() {
  return (
    
    // <Container className='' >

    <Form className='login'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
{/* 
      <Button >Sign In</Button>
      <Link href="/Register">Register</Link>
    */}
      
    </Form>

    // </Container>
  );
}

export default TextControlsExample;