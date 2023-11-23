import React from 'react';
import './footer.css';

function FooterComponent() {
  return (
    <footer className='footer'>
      <section className='footer-top'>
      </section>

      <section className='footer-main'>
        <div className='footer-container'>
          <div className='footer-column'>
            <h6 className='footer-title'>
              Accommodations designed for developers. 
            </h6>
          </div>

          <div className='footer-column'>
            <h6 className='footer-title'>Join Us</h6>
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
          </div>

          <div className='footer-column'>
            <h6 className='footer-title'>Get Started</h6>
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
          </div>

          <div className='footer-column'>
            <h6 className='footer-title'>Contact</h6>
            <p>
              <span className='icon'>New York, NY 10012, US</span>
            </p>
            <p>
              <span className='icon'>info@devbnb.com</span>
            </p>
            <p>
              <span className='icon'>+ 01 234 567 88</span>
            </p>
          </div>
        </div>
      </section>

      <section className='footer-bottom'>
        <div className='text-center'>
          © 2023 Copyright
        </div>
      </section>
    </footer>
  );
}

export default FooterComponent;
