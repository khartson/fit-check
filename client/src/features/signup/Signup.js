import React from "react";
import {
  Grid,
  Form,
  Header,
  Button,
} from 'semantic-ui-react';


function Signup() {
  return(
        <Grid padded textAlign='center' 
              style={{ height: '100vh', 
                       backgroundColor: 'black'
                    }} 
              verticalAlign='middle'
        >
          <Grid.Column>
            <Header  inverted as='h2' textAlign="center">Sign Up for FitCheck</Header>
          </Grid.Column>
        </Grid>
  );
}

export default Signup;

