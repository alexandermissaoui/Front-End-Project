import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './support.css'
import Container from 'react-bootstrap/esm/Container';



function TextControlsExample() {
  return (

    <Container className='support'>

    <Form className=''>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Question</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button >Submit</Button>

    </Form>


    </Container>
  );
}

export default TextControlsExample;