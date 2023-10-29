import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/esm/Container';
import './bookings.css'


function BasicExample() {
  return (
    <Container className='booking'>
    <Card style={{ width: '45rem' }}> 
        
      <Card.Body>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Title>Accommodation</Card.Title>
        <Card.Text>
          Date:
        </Card.Text>
        <Card.Text>
          Location:
        </Card.Text>
        <Card.Text>
          Price:
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Container>
  );
}

export default BasicExample;