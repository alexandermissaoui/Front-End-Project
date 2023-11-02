import React, { useEffect } from 'react';

import { useParams } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

import { useAccommodations } from '../../Context/AccommodationContext';

function DetailPage() {
  
  const params = useParams()
  const accommodations = useAccommodations()
  const {
    detailAccommodation,
    getDetailAccommodation
  } = accommodations
  
  useEffect(()=> {
    if(params.id){
      getDetailAccommodation(params.id)
    }
  },[params])

  if (!detailAccommodation) {
    return <div>Loading...</div>; // Handle loading state if accommodation data is not available yet
  }

  return (
    <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={detailAccommodation.imageUrl} />
        <Card.Title>{detailAccommodation.title}</Card.Title>
        <Card.Text>{detailAccommodation.description}</Card.Text>
        <Card.Text>
          Host: {detailAccommodation.host}<br />
          Location: {detailAccommodation.location}<br />
          Price/Night: ${detailAccommodation.price}
        </Card.Text>
        <Button className='button'>Reserve</Button>
      </Card.Body>
    </Card>
  );
}

export default DetailPage
