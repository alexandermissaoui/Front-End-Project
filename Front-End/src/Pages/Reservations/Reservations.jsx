import { object } from 'prop-types';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useUser } from '../../Context/UserContext';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const userState = useUser()

  useEffect(() => {
    if(userState.token){
      console.log(userState);
    // Fetch user reservations from the API endpoint
    fetch('http://localhost:3030/api/reservations/user/me', {

      headers: {
        'Content-Type': 'application/json',
        // Add authorization header with user token if needed
        Authorization: `Bearer ${userState.token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("RESERVATIONS: ", data)
        setReservations(data)
      }) // Assuming the API response is an array of reservation objects
      .catch((error) => console.error('Error fetching reservations:', error));
    }
  }, [userState.token]); // Empty dependency array ensures the effect runs once after the initial render
  return (
    <>
      {reservations.map((reservation, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '10px' }}>
          <Card.Body>
            <Card.Title>{reservation.accommodation.title}</Card.Title>
            <Card.Text>
              Period: {reservation.checkin} - {reservation.checkout}<br />
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Reservations;
