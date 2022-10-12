import React, { useState } from "react";
import {
  Grid,
  Form,
  Header,
  Button,
  Segment,
} from 'semantic-ui-react';

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name, 
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        bio: bio,
      }),
    }).then((r)=>{
      // if (r.ok) {
        r.json().then((user)=>console.log(user));
      // }
    })

  }
  return(
        <Grid padded textAlign='center' 
              style={{ height: '100vh', 
                       backgroundColor: 'black'
                    }} 
              verticalAlign='middle'
        >
          <Grid.Column style={{width: '500px'}}>
            <Header  inverted as='h2' textAlign="center">Sign Up for FitCheck</Header>
            <Form onSubmit={handleSubmit}>
              <Segment stacked> 
                <Form.Input value={name} 
                            fluid icon='male' 
                            iconPosition="left" 
                            placeholder='name'
                            onChange={(e)=>setName(e.target.value)}/>
                <Form.Input value={username}
                            fluid icon='user' 
                            iconPosition='left' 
                            placeholder='username'
                            onChange={(e)=>setUsername(e.target.value)}/>
                <Form.Input value={password}
                            fluid icon='lock' 
                            iconPosition='left' 
                            placeholder='password' 
                            type='password'
                            onChange={(e)=>setPassword(e.target.value)}/>
                <Form.Input value={passwordConfirmation}
                            fluid icon='checkmark' 
                            iconPosition='left' 
                            placeholder='confirm password' 
                            type='password'
                            onChange={(e)=>setPasswordConfirmation(e.target.value)}/>
                <Form.TextArea value={bio}
                               placeholder='tell us a bit about yourself'
                               onChange={(e)=>setBio(e.target.value)}/>
                <Button basic type='submit' fluid size='large'>
                  Sign up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
  );
}

export default Signup;

