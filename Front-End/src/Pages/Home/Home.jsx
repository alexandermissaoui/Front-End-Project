import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAccommodations } from '../../Context/AccommodationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import './home.css';

function BasicExample() {
  const { accommodations } = useAccommodations();

  if (!accommodations.length) {
    return <div>Loading...</div>; // Loading indicator while data is being fetched
  }

  return (
    <div className="my-4">
    <h1 className='h1'>HOME</h1>
    <Row xs={1} md={2} lg={3} className="g-4">
      {accommodations.map(accommodation => (
        <Col key={accommodation._id}>
          <Link to={`/Detail/${accommodation._id}`} style={{ textDecoration: 'none' }}>
            <Card style={{ height: '100%' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={accommodation.imageUrl}
                  alt={accommodation.title}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <Card.Body style={{ height: '120px' }}>
                {/* Adjust the height value according to your design */}
                <Card.Title>{accommodation.title}</Card.Title>
                <span>${accommodation.price}/night</span>
                <div className='wifi-icon-container'>
                  <FontAwesomeIcon icon={faWifi} className='wifi-icon' />
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  </div>
  );
}

export default BasicExample;
