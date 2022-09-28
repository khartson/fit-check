import React from 'react'
import { Link } from 'react-router-dom';
import { 
  Grid,
  List,
  Header,
  Container,
  Icon,
  Button,
  Divider,
} from 'semantic-ui-react';

function Footer() {
  return(
    <Container style={{padding: '20px'}} textAlign='center'>
      <Divider inverted ></Divider>
      <Grid divided inverted stackable centered> 
        <Grid.Row>
          <Grid.Column width={4} textAlign='left'>
            <Header inverted>FitCheck.</Header>
          </Grid.Column>
          <Grid.Column width={4} textAlign='center'>
            <Header as={Link} to='/about' inverted> About this Site</Header>
          </Grid.Column>
          <Grid.Column width={4} textAlign='right'>
            <List inverted bulleted horizontal link>
              <List.Item as='a' href='https://github.com/khartson'>
                <Icon size='large' name='github'/>
              </List.Item>
              <List.Item as='a' href='https://www.linkedin.com/in/kyle-hartson/'>
                <Icon size='large' name='linkedin'/>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Footer;
