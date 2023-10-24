import React from 'react';
// import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import './detail.css'



function BasicExample() {
  return (
    
    <Container className='detail'>
    <Card style={{ width: '50rem' }}>
      

      <Card.Body>
      <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Title>Appartement </Card.Title>
        <Card.Text>
          Host:
        </Card.Text>
        <Card.Text>
          Price:
        </Card.Text>
        <Card.Text>
          
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
           
        <Button className='button' >Reserve</Button>

      </Card.Body>
   
    </Card>

    </Container>

    
  );
}



export default BasicExample;