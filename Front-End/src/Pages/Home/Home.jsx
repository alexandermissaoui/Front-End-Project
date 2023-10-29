import React from 'react';
// import './Home.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/esm/Container';
// import './home.css'




function BasicExample ({ accommodation }) {
  return (

    <Link to={`/Detail/${accommodation.id}`} style={{ textDecoration: 'none' }}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={accommodation.imgUrl} alt={accommodation.accommodationTitle} />
      <Card.Body>
        <Card.Title>{accommodation.accommodationTitle.slice(0, 30)}...</Card.Title>
        <Span>${accommodation.price}</Span>
   
      </Card.Body>
    </Card>
    </Link>
  );
}

export default BasicExample;









   
      
             
 
      

