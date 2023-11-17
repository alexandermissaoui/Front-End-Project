import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useUser } from '../../Context/UserContext';
import './reservations.css'

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
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

 
  const handleContinueClick = () => {
    setActiveModal('payment');
  };

  const handlePay = () => {
    // Implement logic for payment
    // You can call an API to process the payment
    // Once payment is successful, you can open the confirmation modal
    setActiveModal('confirmation');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'payment':
        return (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Payment Options</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* Add your payment options here */}
            <p>Choose a payment option:</p>
            <div>
              <label>
                <input type="radio" name="paymentOption" value="swish" />
                Swish
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="paymentOption" value="paypal" />
                PayPal
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="paymentOption" value="mastercard" />
                Mastercard
              </label>
            </div>
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handlePay}>
                Pay
              </Button>
            </Modal.Footer>
          </>
        );
      case 'confirmation':
        return (
          <>
            <Modal.Header closeButton>
              <Modal.Title>PAYMENT SUCCESFULL!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Add your confirmation content here */}
              <p>Your reservation is now payed. <br />Thank you for choosing our services! <br />//DevBnb  </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        );
      default:
        return null;
    }
  };

  return (

    <div className="d-flex flex-column align-items-center mt-4 mb-4">
      {reservations.map((reservation, index) => (
        <div className="d-flex align-items-center mb-3">
  <div style={{ marginRight: '20px' }}>
  <div className="d-flex align-items-start mb-3">
  <div style={{ marginRight: '20px' }}>
    <img
      src={reservation.accommodation.imageUrl} // Replace with the actual URL of your image
      alt="Accommodation"
      style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '16px' }}
    />
  </div>
  

     <Card  style={{ width: '500px', height: '200px', backgroundColor: 'var(--background-black-50, rgba(0, 0, 0, 0.50))', borderRadius: '16px', color: '#fff' }}>
    <Card.Body>
      <Card.Title>{reservation.accommodation.title}</Card.Title>
      <Card.Text>
        Period: {formatDate(reservation.checkin)} - {formatDate(reservation.checkout)}<br />
        Price/Night: ${reservation.accommodation.price}<hr />
        Total Price: ${calculateTotalPrice(reservation.checkin, reservation.checkout, reservation.accommodation.price)}
      </Card.Text>
    </Card.Body>
    </Card>
  
</div>

    
    <div className="d-flex justify-content-center" style={{ marginTop: '10px' }}>
      <Button variant="primary" className="red-button" style={{
        marginRight: '5px',
        marginBottom: '5px',
        borderRadius: '5px',
        background: 'var(--linear-black-red-black, linear-gradient(180deg, #000 0%, #F00 52.08%, #000 100%)',
        border: 'none'
      }}>Remove</Button>

      <Button variant="secondary" className="green-button" style={{
        marginLeft: '5px',
        marginBottom: '5px',
        borderRadius: '5px',
        background: 'var(--linear-black-green-black, linear-gradient(180deg, #000 0%, #42FF00 52.08%, #000 100%)',
        border: 'none'
      }} onClick={handleContinueClick}>Continue</Button>
    </div>
  </div>
</div>


  
   
     
      ))}

      <Modal show={activeModal !== null} onHide={handleCloseModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Reservations;
