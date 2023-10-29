import React from 'react';
// import './Home.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css";
import './about.css'

function BasicExample() {
  return (

    <Accordion defaultActiveKey="0" className='about'>
    <Accordion.Item eventKey="0">
      <Accordion.Header>About Us</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Exercitationem, sapiente quod ipsam quae animi, 
        soluta tempora eligendi laudantium repudiandae voluptatem ipsum molestiae iusto? 
        Voluptatibus, aperiam natus qui nihil autem iure?
      </Accordion.Body>
    </Accordion.Item>
   
  </Accordion>

    
  );
}

export default BasicExample;