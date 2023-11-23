import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
// import './register.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/UserContext'; //new

function RegisterPage() {
  const user = useUser() //new
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ``,
    password: ''
  });

  const navigate = useNavigate ()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your Node.js backend endpoint
      const response = await axios.post('http://localhost:3030/api/users/register', formData);

      // Handle successful registration, for example, redirect to login page
      console.log('Registration successful:', response.data);
      if(response.data.token) {
        localStorage.setItem("TOKEN", response.data.token)

        user.setToken("TOKEN", response.data.token) //new

        navigate("/")
      }
    } catch (error) {
      // Handle registration error, for example, display an error message to the user
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>

      <h1 className='h1'>REGISTER</h1>
    <Container className='register' style={{
      background: 'rgb(0, 0, 0)',
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(108,108,108,1) 50%, rgba(0,0,0,1) 100%)',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px', // Set maximum width for responsiveness
      color: '#fff',
      margin: '20px auto'
    }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
        </Form.Group>
        <div className="text-center">
        <Button type="submit" style={{
            background: 'rgb(0, 0, 0)',
            background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,117,255,1) 50%, rgba(0,0,0,1) 100%)',
            border: 'none'
          }}>Create User</Button>
        </div>
      </Form>
    </Container>
    </div>
  );
}

export default RegisterPage;
