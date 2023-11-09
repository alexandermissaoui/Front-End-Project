import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAccommodations } from '../../Context/AccommodationContext';
import { useUser } from '../../Context/UserContext';

function DetailPage() {
  const userState = useUser()
  const params = useParams();
  const accommodations = useAccommodations();
  const { detailAccommodation, getDetailAccommodation } = accommodations;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (params.id) {
      getDetailAccommodation(params.id);
    }
  }, [params]);

  if (!detailAccommodation) {
    return <div>Loading...</div>; // Handle loading state if accommodation data is not available yet
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleReservation = async () => {
    if (startDate && endDate) {
      console.log("accommadtion", detailAccommodation)
      const reservationData = {
        accommodation: detailAccommodation._id,
        checkin: startDate,
        checkout: endDate,
      };

      try {
        const response = await fetch('http://localhost:3030/api/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add authorization header with user token if needed
            Authorization: `Bearer ${userState.token}`
          },
          body: JSON.stringify(reservationData),
        });

        if (response.ok) {
          // Handle successful reservation, e.g., show a success message to the user
          console.log('Reservation successful!');
        } else {
          // Handle failed reservation, e.g., show an error message to the user
          console.error('Reservation failed');
          console.log(response);
        }
      } catch (error) {
        // Handle network error, e.g., show a generic error message to the user
        console.error('Error:', error);
      }
    } else {
      // Handle invalid reservation dates, e.g., show an error message to the user
      console.error('Invalid reservation dates');
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <Card>
            <Card.Img variant="top" src={detailAccommodation.imageUrl} />
            <Card.Body>
              <Card.Title>{detailAccommodation.title}</Card.Title>
              <Card.Text>{detailAccommodation.description}</Card.Text>
              <Card.Text>
                Host: {detailAccommodation.host}<br />
                Location: {detailAccommodation.location}<br />
                Price/Night: ${detailAccommodation.price}
              </Card.Text>
              <div className="mb-3">
                <label className="mr-3">Check-in:</label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="mr-3">Check-out:</label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="form-control"
                />
              </div>
              <Button className='btn btn-primary' onClick={handleReservation}>
                Reserve
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
