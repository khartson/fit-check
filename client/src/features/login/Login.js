import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../user/userSlice'; 

import {
  Grid,
  Form,
  Header,
  Button, 
  Segment,
  Message,
} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg([]);
    fetch('login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    }).then((r)=>{
      if (r.ok) {
        setError(false);
        r.json().then((user)=>{
          dispatch(userLoggedIn(user));
          navigate('/feed');
        })
      }
      else {
        r.json().then((user)=>{
          setErrorMsg(user.errors);
          setError(true);
        })
      }
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
          <Header inverted as='h2' textAlign='center'>Login to FitCheck</Header>
          <Form error={error} onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input value={username}
                          fluid icon='user'
                          iconPosition='left'
                          placeholder='username'
                          onChange={(e)=>setUsername(e.target.value)}
              />
              <Form.Input value={password}
                          fluid icon='lock'
                          iconPosition='keft'
                          placeholder='password'
                          type='password'
                          onChange={(e)=>setPassword(e.target.value)}
              />
              <Button basci type='submit' fluid size='large'>
                Log in
              </Button>
              {errorMsg.map((error=>{
                return <Message error content={error}/>
              }))}
            </Segment>
          </Form>
        </Grid.Column>

      </Grid>
    )
}

export default Login;