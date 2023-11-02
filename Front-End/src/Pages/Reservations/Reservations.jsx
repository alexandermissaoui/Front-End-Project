import React from 'react'
import Card from 'react-bootstrap/Card';

const Reservations = () => {
  return (

    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
      <Card.Title>{reservation.title}</Card.Title>
        <Card.Text>
          Period{reservation.checkin} - {reservation.checkout}
          Total Price: {reservation.price}
        </Card.Text>
      </Card.Body>
    </Card>  
    
)
}

export default Reservations