import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3030/api/users/login', {
        email,
        password
      })
      console.log("Response", response.data)
      if (response.status === 200) {
        // Login successful
        console.log('Login successful');
        
        if(response.data.token) {
          localStorage.setItem("TOKEN", response.data.token)
          //TODO: route to user page
        }
      } else {
        // Login failed
        console.error('Login failed');
        console.log("Response:", response, email, password)
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <Container className='login'>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button onClick={handleLogin}>Log In</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;


//1. Login with credentials
//2a. set token to localStorage
//2b. set token to userContext
//2c. Route user to /user
//3. After token is set in userContext get user details
//3b. Get user reservations
//4. save details in context