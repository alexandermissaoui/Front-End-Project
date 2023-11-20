import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAccommodations } from '../../Context/AccommodationContext';
import { useUser } from '../../Context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDoorOpen, faMedal, faLocationDot, faBed, faWifi, faCar, faBagShopping, faUmbrellaBeach, faMugSaucer, faPizzaSlice, faBath } from '@fortawesome/free-solid-svg-icons';


function DetailPage() {
  const userState = useUser();
  const navigate = useNavigate(); // useNavigate hook for navigation
  const params = useParams();
  const accommodations = useAccommodations();
  const { detailAccommodation, getDetailAccommodation } = accommodations;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {


    if (params.id) {
      getDetailAccommodation(params.id);
    }
  }, [params, userState, navigate]);

  if (!detailAccommodation) {
    return <div>Loading...</div>; // Handle loading state if user is not authenticated or accommodation data is not available yet
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };


  const handleReservation = async () => {

    if (!userState.token) return navigate('/login');

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

          navigate("/reservations")
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

  // console.log("Detail room", detailRoom)
  return (

    <div>

    <h1 className='h1'>DETAILS</h1>
    <div className="container my-4">
    <div className="row justify-content-center">
      <div className="col-lg-8 col-md-10 col-sm-12">

  
  <div className='d-flex flex-row flex-nowrap gap-2 mb-3'>
    {/* big image */}
    <Card.Img
          style={{width: "calc(50% - 8px)"}}
          className='rounded-1'
          variant="top"
      src={detailAccommodation.imageUrl}
    />


    <div className="d-flex flex-row gap-2 flex-wrap">
      {detailAccommodation?.images?.map(image => (
        <Card.Img
          key={image}
          className='rounded-1'
          style={{width: "calc(50% - 4px)"}}
          variant='top'
          src={image}
          />
      ))}
      </div>
</div>

  <Card style={{ 
  borderRadius: '16px',
  background: 'var(--background-black-50, rgba(0, 0, 0, 0.50))',
  color: '#fff'
}}>
  
  <Card.Body>
    <Card.Title>{detailAccommodation.title}</Card.Title> <p>2 Quests - 1 Bedroom - 1 Bed - 2 Bathrooms</p> 
    <hr />
    <Card.Text>
    <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /> {detailAccommodation.host}<br />
    <hr />
    <FontAwesomeIcon icon={faDoorOpen} style={{color: "#ffffff",}} /> Self Checkin <br />
    <FontAwesomeIcon icon={faMedal} style={{color: "#ffffff",}} /> Super Host <br />
    <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} /> {detailAccommodation.location}
    <hr />
    </Card.Text> 
    <Card.Text>Description: <br />
      {detailAccommodation.description}</Card.Text>

      <hr />

      <p>Where you'll sleep:</p>
      <p>1 bedroom</p>
      <p><FontAwesomeIcon icon={faBed} style={{color: "#ffffff",}} /> Queen bed</p>
      <hr />

      <p>What this place offers:</p>
      <FontAwesomeIcon icon={faWifi} style={{color: "#ffffff",}} /> Wifi <br />
      <FontAwesomeIcon icon={faBagShopping} style={{color: "#ffffff",}} /> Luggage drop-of allowed <br />
      <FontAwesomeIcon icon={faCar} style={{color: "#ffffff",}} /> Free parking on permises <br />
      <FontAwesomeIcon icon={faUmbrellaBeach} style={{color: "#ffffff",}} /> Beach access <br />
      <FontAwesomeIcon icon={faMugSaucer} style={{color: "#ffffff",}} /> Coffe machine <br />
      <FontAwesomeIcon icon={faPizzaSlice} style={{color: "#ffffff",}} /> Food delivery allowed <br />
      <FontAwesomeIcon icon={faBath} style={{color: "#ffffff",}} /> Bathtub/Shower <br /> 
      <hr />

 
  
<div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
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

<div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
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

<p>${detailAccommodation.price}/night</p>

<div className="d-flex justify-content-center">
  <Button
    variant="secondary"
    className="green-button mx-auto d-block"
    style={{
      borderRadius: '5px',
      background: 'var(--linear-black-green-black, linear-gradient(180deg, #000 0%, #42FF00 52.08%, #000 100%)',
      border: 'none',
      padding: '5px', // Add padding as needed
      width: '120px', // Set the width as needed
    }}
    onClick={handleReservation}
  >
    Reserve
  </Button>
</div>

  </Card.Body>
</Card>

      </div>
    </div>
  </div>

  </div>
  );
}

export default DetailPage;


