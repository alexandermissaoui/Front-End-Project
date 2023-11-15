import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
// import './support.css';
import Container from 'react-bootstrap/Container';

function TextControlsExample() {
  return (

    <Container className='support mx-auto' style={{ 
      background: 'rgb(0, 0, 0)',
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(108,108,108,1) 50%, rgba(0,0,0,1) 100%)',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px', // Set maximum width for responsiveness
      color: '#fff', // Set text color to white
      margin: '20px 0' // Add margin top and bottom
    }}>
      <Form className="d-flex flex-column align-items-center">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" style={{ width: '100%' }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Question</Form.Label>
          <Form.Control as="textarea" rows={3} style={{ width: '100%' }} />
        </Form.Group>
        <Button className="w-25 justify-content-center" style={{ 
          background: 'rgb(0, 0, 0)',
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,117,255,1) 50%, rgba(0,0,0,1) 100%)',
          border: 'none'
        }}>Submit</Button>
      </Form>
    </Container>
  );
}

export default TextControlsExample;
