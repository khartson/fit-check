import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Header,
  Grid,
} from 'semantic-ui-react';
function Hero() {
  return (
    <Container 
      style={{backgroundColor: 'white',
              height: '30vh',
              padding: '150px',
              borderRadius: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              }} 
        text textAlign='center'
      >
      <Grid centered>
      <Header style={{ fontSize: 50}} as='h1'>Welcome to FitCheck.</Header>
      <p style={{color: 'grey'}}>A community-driven platform for strength athletes to perfect their craft</p>
      <Button size='large' as={Link} to='signup' color='black'>Sign up</Button>
      <Button size='large' as={Link} to='login' basic>Login</Button>
      </Grid>
    </Container>
  );
}

export default Hero;