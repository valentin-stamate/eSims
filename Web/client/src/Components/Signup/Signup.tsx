import React from "react";
import ContainerMD from '../Common/ContainerMD/ContainerMD';
import Img from '../../assets/full-logo.svg'
import { Button, TextField} from '@material-ui/core';
import {setCookie, getCookie} from '../../Globals/Cookie'

function makeRequest() {
    let url = "http://localhost:8000/api/signup/";

    let registrationDOM = document.getElementById('registration') as HTMLInputElement;
    let emailDOM = document.getElementById('email') as HTMLInputElement;
    let emailConfDOM = document.getElementById('email_conf') as HTMLInputElement;
    let passwordDOM = document.getElementById('password') as HTMLInputElement;
    let passwordConfDOM = document.getElementById('password_conf') as HTMLInputElement;

    let registration = registrationDOM != null ? registrationDOM.value : ""
    let email = emailDOM != null ? emailDOM.value : ""
    let emailConf = emailConfDOM != null ? emailConfDOM.value : ""
    let password = passwordDOM != null ? passwordDOM.value : ""
    let passwordConf = passwordConfDOM != null ? passwordConfDOM.value : ""

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
    //    A material component maybe
    });
}

export default function SignUp() {
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
