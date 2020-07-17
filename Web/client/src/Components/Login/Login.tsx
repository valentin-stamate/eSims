import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import './Login.css';
import { Typography, Button, TextField} from '@material-ui/core';
import ContainerMD from '../Common/ContainerMD/ContainerMD'

import Img from '../../assets/full-logo.svg'
import {setCookie} from "../../Globals/Cookie";

function LoginAction() {
    let registrationDOM = document.getElementById('registration') as HTMLInputElement;
    let passwordDOM = document.getElementById('password') as HTMLInputElement;

    let registration = registrationDOM !== null ? registrationDOM.value : "";
    let password = passwordDOM !== null ? passwordDOM.value : "";

    let token = LoginUser(registration, password);

}

function LoginUser(reg, pass): String | null {

    let url = 'http://localhost/login';

    let dataToSent = {
        username: reg,
        password: pass
    }

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSent),
    }).then( res => {
        if (res.status !== 304) {
            alert("User not found");
            throw "Error";
        }
        return res.json()
    } ).then(data => {
        setCookie('user_id', data.token);
        window.location.href = './home';
    }).catch(e => {
            alert(e)
        }
    )

    return "";
}

class Login extends Component {

    render() {
        return (
            <div>

                <img src={Img} width={320} className="Full-Logo"/>

                <ContainerMD containerTitle="LOGIN" containerSize="sm" padding="3">

                    <form noValidate autoComplete="off">
                        <div className="marg-top">
                            <TextField fullWidth label="Numar Matricol" variant="filled" id="registration" />
                        </div>

                        <div className="marg-top">
                            <TextField fullWidth label="Parola" variant="filled" type="password" className="marg-top" id="password" />
                        </div>

                        <Button variant="contained" color="primary" className="align-right" onClick={LoginAction}>
                            Login
                        </Button>
                    </form>

                    <Button variant="outlined" href="./signup">
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
