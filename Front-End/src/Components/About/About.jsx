import React from 'react';
import Image from 'react-bootstrap/Image';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/esm/Container';


function FluidExample() {
  return <Container className='d-flex justify-content-center'>
    <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRldmVsb3BlciUyMGFpcmJuYiUyMHNldHVwfGVufDB8fDB8fHww" fluid />

    </Container>


}



export default FluidExample;