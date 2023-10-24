import React from 'react';
// import './Home.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import './about.css'

function BasicExample() {
  return (
    
    <Container className='about'>

    <Card style={{ width: '50rem' }}>
      
      <Card.Body>

      <Card.Img variant="top" src="holder.js/100px180" />

        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, blanditiis saepe nisi optio nihil, cupiditate ad perferendis vero quisquam facilis cumque iure. Amet consequatur quasi, voluptatibus eos libero nemo qui?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, blanditiis saepe nisi optio nihil, cupiditate ad perferendis vero quisquam facilis cumque iure. Amet consequatur quasi, voluptatibus eos libero nemo qui?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, blanditiis saepe nisi optio nihil, cupiditate ad perferendis vero quisquam facilis cumque iure. Amet consequatur quasi, voluptatibus eos libero nemo qui?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, blanditiis saepe nisi optio nihil, cupiditate ad perferendis vero quisquam facilis cumque iure. Amet consequatur quasi, voluptatibus eos libero nemo qui?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, blanditiis saepe nisi optio nihil, cupiditate ad perferendis vero quisquam facilis cumque iure. Amet consequatur quasi, voluptatibus eos libero nemo qui?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, blanditiis saepe nisi optio nihil, cupiditate ad perferendis vero quisquam facilis cumque iure. Amet consequatur quasi, voluptatibus eos libero nemo qui?

        </Card.Text>
        
        
      </Card.Body>
   
    </Card>

    </Container>

    
  );
}

export default BasicExample;