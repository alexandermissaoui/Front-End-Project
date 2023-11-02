import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample({ accommodation }) {
  if (!accommodation) {
    return <div>Loading...</div>; // Handle loading state if accommodation data is not available yet
  }

  return (
    <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={accommodation.imageUrl} />
        <Card.Title>{accommodation.title}</Card.Title>
        <Card.Text>{accommodation.description}</Card.Text>
        <Card.Text>
          Host: {accommodation.host}<br />
          Location: {accommodation.location}<br />
          Price/Night: ${accommodation.price}
        </Card.Text>
        <Button className='button'>Reserve</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
