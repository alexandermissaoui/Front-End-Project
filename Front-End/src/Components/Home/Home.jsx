import React from 'react';
// import './Home.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import './home.css'


function BasicExample() {
  return (
    <Link to={`/Detail`} >

    <Container className='container'>

    <Card style={{ width: '18rem', textDecoration: 'none' }}>
      
      <Card.Body>
      <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Title>Appartement </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
   
    </Card>
    </Container>
    </Link>

    
  );
}

export default BasicExample;