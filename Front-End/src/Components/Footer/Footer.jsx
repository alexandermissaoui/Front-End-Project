import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function ListExample() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='secondary' icon='gem' className='me-3' />
              DEVBNB
            </h6>
            <p>
              Accommodations designed for developers.
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Join Us</h6>
            <p>
              <a href='/Login' className='text-reset'>
                Sign Up
              </a>
            </p>
            <p>
              <a href='/Register' className='text-reset'>
                Register
              </a>
            </p>         
            <p>
              <a href='/About' className='text-reset'>
                About Us
              </a>
            </p>
      
        
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Get Started</h6>
            <p>
              <a href='/' className='text-reset'>
                Our Accommodations
              </a>
            </p>          
            <p>
              <a href='/Reservations' className='text-reset'>
                My Reservations
              </a>
            </p>
            <p>
              <a href='/Support' className='text-reset'>
                Support
              </a>
            </p>
     
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon color='secondary' icon='home' className='me-2' />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon color='secondary' icon='envelope' className='me-3' />
              info@devbnb.com
            </p>
            <p>
              <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
            </p>
         
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Copyright
     
    </div>
  </MDBFooter>

  );
}

export default ListExample;