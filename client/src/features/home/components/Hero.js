import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Header,
} from 'semantic-ui-react';
function Hero() {
  return (
    <Container 
      style={{backgroundColor: 'white',
              height: '25vh',
              width: '60vw',
              padding: '80px',
              borderRadius: '30px'
              }} 
        text textAlign='center'
      >
      <Header as='h1'>Welcome to FitCheck.</Header>
      <p style={{color: 'grey'}}>A community-driven platform for strength athletes to perfect their craft</p>
      <Button as={Link} to='signup' color='black'>Sign up</Button>
      <Button as={Link} to='login' basic>Login</Button>
    </Container>
  );
}

export default Hero;