import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './signuppage.css';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      console.log('resepose');
      const response = await register(formData);
      console.log(response.message);
      // Handle successful registration (e.g., redirect, show message)
      navigate('/dashboard');
    } catch (error) {
      console.error(error.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <Container fluid className='signup-container'>
      <Row>
        <Col md={6} className='left-section'>
          <div>
            <h1>Excel Tech Consulting</h1>
            <img src='/images/login.jpg' alt='Electronic components' />
          </div>
        </Col>
        <Col md={6} className='right-section'>
          <div className='welcome'>
            <h1 className='brand'>
              STOCK<span className='highlight'>PULSE</span>
            </h1>
            <h2>Register</h2>
            <p>Manage all your inventory efficiently</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='formFirstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your name'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId='formLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your name'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId='formPhone'>
                <Form.Label>Phone no.</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your phone number'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter your password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId='formTerms'>
                <Form.Check
                  type='checkbox'
                  label='I agree to all terms, privacy policies, and fees'
                />
              </Form.Group>

              <Button variant='primary' type='submit' onClick={handleSubmit}>
                Sign Up
              </Button>

              <div className='login-link'>
                Already have an account?{' '}
                <Button variant='link' onClick={() => navigate('/login')}>
                  Log in
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
