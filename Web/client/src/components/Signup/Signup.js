import React from 'react'
import { Typography, Container, Button, TextField, Chip, FilledInput, Paper } from '@material-ui/core';
import ContainerMD from '../ContainerMD/ContainerMD';
import Img from '../../assets/full-logo.svg'

function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

function makeRequest() {
  let url = "http://localhost:8000/api/signup/";
  let registration = document.getElementById('registration').value;
  let email = document.getElementById('email').value;
  let emailConf = document.getElementById('email_conf').value;
  let password = document.getElementById('password').value;
  let passwordConf = document.getElementById('password_conf').value;

  if (registration.length < 10 || email.length < 10 || password.length < 7) {
    alert("Registration >= 10; Email >= 10; password >= 8");
    return;
  }

  if (email !== emailConf) {
    alert("Password should match");
    return;
  }

  if (password !== passwordConf) {
    alert("Password should match");
    return;
  }

  let data = {
    'username': registration,
    'email': email,
    'password': password
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {

    if (response.status === 201)
      return response.json();
    throw "Error";

  }).then(data => {
    setCookie('user_id', data.token);
    window.location.href = './home';
  }).catch(e => {
    alert(e);
  });
}

function Signup() {

  return (
    <div>

      <img src={Img} width={320} className="Full-Logo" />

      <ContainerMD containerTitle="CREARE CONT" containerSize="sm" padding="3">

        <form noValidate autoComplete="off">
          <div className="marg-top">
            <TextField fullWidth label="Numar Matricol" variant="filled" id="registration" />
          </div>

          <div className="marg-top">
            <TextField fullWidth label="Email" variant="filled" helperText="Adresa de mail v-a fi folosita pentru recuperare" id="email" />
          </div>

          <div className="marg-top">
            <TextField fullWidth label="Confirma Email" variant="filled" id="email_conf" />
          </div>

          <div className="marg-top">
            <TextField fullWidth label="Parola" variant="filled" type="password" className="marg-top" id="password" />
          </div>

          <div className="marg-top">
            <TextField fullWidth label="Confirma Parola" variant="filled" type="password" className="marg-top" id="password_conf" />
          </div>

          <Button id="button" onClick={makeRequest} variant="contained" color="primary">
            Creare Cont Nou
          </Button>
        </form>


      </ContainerMD>
    </div>
  );

}

export default Signup;