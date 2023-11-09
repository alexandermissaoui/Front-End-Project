import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useUser } from '../../Context/UserContext';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const userState = useUser();

  useEffect(() => {
    if (userState.token) {
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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateTotalPrice = (checkin, checkout, pricePerNight) => {
    const startDate = new Date(checkin);
    const endDate = new Date(checkout);
    const numberOfNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalPrice = numberOfNights * pricePerNight;
    return totalPrice;
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4 mb-4">
      {reservations.map((reservation, index) => (
        <Card key={index} className="w-75 mb-3">
          <Card.Body>
            <Card.Title>{reservation.accommodation.title}</Card.Title>
            <Card.Text>
              Period: {formatDate(reservation.checkin)} - {formatDate(reservation.checkout)}<br />
              Price/Night: ${reservation.accommodation.price}<br />
              Total Price: ${calculateTotalPrice(reservation.checkin, reservation.checkout, reservation.accommodation.price)}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Reservations;
