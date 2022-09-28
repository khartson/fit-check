import React from 'react';
import Hero  from './components/Hero';
import Footer from './components/Footer';
import { Container } from 'semantic-ui-react';

function Home() {
  
  return (
    <Container style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
      <Hero/>
      <Footer/>
    </Container>
  );
}

export default Home;