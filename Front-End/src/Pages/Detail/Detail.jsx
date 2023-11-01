import React from 'react';
// import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/esm/Container';
// import './detail.css'



function BasicExample() {
  return (
    
  
    <Card style={{ width: '50rem' }}>
      

      <Card.Body>

      <Card.Img variant="top" src={accommodation.imageUrl} />

        <Card.Title>{accommodation.title}</Card.Title>

        <Card.Text>
          {accommodation.description}
        </Card.Text>

        <Card.Text>
          Host: {accommodation.host}
          Location: {accommodation.location}
          Price/Night: ${accommodation.price}
        </Card.Text>
       
       
        <Button className='button' >Reserve</Button>

      </Card.Body>
   
    </Card>


    
  );
}



export default BasicExample;