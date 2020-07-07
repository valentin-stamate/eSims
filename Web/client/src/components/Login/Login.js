import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import './Login.css';
import { Typography, Container, Button, TextField, Chip, FilledInput } from '@material-ui/core';
import ContainerMD from '../ContainerMD/ContainerMD'

import Img from '../../assets/full-logo.svg'


class Login extends Component {

  render() {


    return (
      <div>
    
        <img src={Img} width={320} className="Full-Logo"/>
       
        <ContainerMD containerTitle="LOGIN" containerSize="sm" padding="3">

          <form noValidate autoComplete="off">
            <div className="marg-top">
              <TextField fullWidth label="Numar Matricol" variant="filled" />
            </div>

            <div className="marg-top">
              <TextField fullWidth label="Parola" variant="filled" type="password" className="marg-top" />
            </div>

            <Button variant="contained" color="primary" className="align-right">
              Login
            </Button>
          </form>

          <Button variant="outlined">
            Creare Cont Nou
          </Button>

          <Paper className="credits">
            <Typography>
              CREAT DE VS
            </Typography>
          </Paper>


        </ContainerMD>

      </div>
    );
  }
}

export default Login;
