import React from 'react'
import { Typography, Container, Button, TextField, Chip, FilledInput, Paper } from '@material-ui/core';
import ContainerMD from '../ContainerMD/ContainerMD';
import Img from '../../assets/full-logo.svg'

function Signup() {

  return (
    <div>

      <img src={Img} width={320} className="Full-Logo" />

      <ContainerMD containerTitle="CREARE CONT" containerSize="sm" padding="3">

        <form noValidate autoComplete="off">
          <div className="marg-top">
            <TextField fullWidth label="Numar Matricol" variant="filled" />
          </div>

          <div className="marg-top">
            <TextField fullWidth label="Parola" variant="filled" type="password" className="marg-top" />
          </div>

          <div className="marg-top">
            <TextField fullWidth label="Confirma Parola" variant="filled" type="password" className="marg-top" />
          </div>

          <div className="marg-top">
            <TextField fullWidth label="Email" variant="filled" helperText="Adresa de mail v-a fi folosita pentru recuperare"/>
          </div>

          <div className="marg-top">
            <TextField fullWidth label="Confirma Email" variant="filled"/>
          </div>

          <Button variant="contained" color="primary">
            Creare Cont Nou
          </Button>
        </form>


      </ContainerMD>
    </div>
  );

}

export default Signup;