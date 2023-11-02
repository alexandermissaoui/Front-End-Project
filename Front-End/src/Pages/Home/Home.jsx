import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAccommodations } from '../../Context/AccommodationContext';

function BasicExample() {
  const { accommodations } = useAccommodations();

  if (!accommodations.length) {
    return <div>Loading...</div>; // Loading indicator while data is being fetched
  }

  return (
    <div className="my-4"> {/* Add margin top and bottom here */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {accommodations.map(accommodation => (
          <Col key={accommodation._id}>
            <Link to={`/Detail/${accommodation._id}`} style={{ textDecoration: 'none' }}>
              <Card>
                <Card.Img variant="top" src={accommodation.imageUrl} alt={accommodation.title} />
                <Card.Body>
                  <Card.Title>{accommodation.title}</Card.Title>
                  <span>${accommodation.price}/night</span>
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
