import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
// import './login.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useUser } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const user = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3030/api/users/login', {
        email,
        password,
      });
      console.log('Response', response.data);
      if (response.status === 200) {
        // Login successful
        console.log('Login successful');

        if (response.data.token) {
          localStorage.setItem('TOKEN', response.data.token);
          // TODO: route to user page
          navigate('/');
          user.setToken(response.data.token);
        }
      } else {
        // Login failed
        console.error('Login failed');
        console.log('Response:', response, email, password);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <Container className='login' style={{
      background: 'rgb(0, 0, 0)',
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(108,108,108,1) 50%, rgba(0,0,0,1) 100%)',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px', // Set maximum width for responsiveness
      color: '#fff',
      margin: '20px auto'
    }}>
      <Form className="d-flex flex-column align-items-center">
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button onClick={handleLogin} className="w-25 justify-content-center" style={{
          background: 'rgb(0, 0, 0)',
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,117,255,1) 50%, rgba(0,0,0,1) 100%)',
          border: 'none'
        }}>Log In</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
