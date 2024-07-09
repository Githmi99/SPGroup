import React, { useState } from 'react';
import { login } from '../services/authService';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import './loginpage.css';
import './GoogleSignInButton.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
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
      const response = await login(formData);
      console.log(response.message);
      navigate('/dashboard');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container fluid className='login-container'>
      <Row>
        <Col md={6} className='left-section'>
          <div className='logo'>
            <h1>Excel Tech Consulting</h1>
            <img
              src='/images/login.jpg'
              alt='Electronic components'
              className='left-image'
            />
          </div>
        </Col>
        <Col md={6} className='right-section'>
          <div className='welcome-back'>
            <h1 className='brand'>
              STOCK<span className='highlight'>PULSE</span>
            </h1>
            <h2>Welcome Back 👋</h2>
            <p>
              Sign in to stay informed about the latest developments with your
              stocks. Track real-time updates and gain insights into the current
              status of your investments effortlessly.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='Example@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  placeholder='At least 8 characters'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <small className='form-text text-muted'>
                  <p>Forgot Password?</p>
                </small>
              </div>

              <Button variant='primary' type='submit' className='signin-btn'>
                Sign in
              </Button>

              <div className='divider'>Or</div>

              <Button variant='light' className='google-signin-btn'>
                <FaGoogle className='google-icon' /> Sign in with Google
              </Button>

              <div className='signup-link'>
                Don’t have an account?{' '}
                <Button variant='link' onClick={() => navigate('/register')}>
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
