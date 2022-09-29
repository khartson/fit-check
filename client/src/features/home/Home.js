import React from 'react';
import Hero  from './components/Hero';
import Footer from './components/Footer';
import { Container, Grid } from 'semantic-ui-react';

function Home() {
  
  return (
    <Container style={{
                      width: '100vw', 
                      height: '100vh', 
                      backgroundColor: 'black',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      }}>
      <Grid padded>
        <Grid.Row>
          <Hero/>
        </Grid.Row>
        <Grid.Row>
          <Footer/>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Home;