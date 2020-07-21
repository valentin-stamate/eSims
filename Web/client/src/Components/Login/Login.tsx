import React, { Component } from 'react';

import Img from '../../assets/full-logo.svg'
import {setCookie} from "../../Globals/Cookie";
import {Button, Card, Container, Form} from "react-bootstrap";
import LittleTitleBox from "../Common/LittleTitleBox/LittleTitleBox";
import { useHistory } from "react-router-dom"
import {serialize} from "v8";

const LoginStudent = (event) => {
    event.preventDefault();

    const loginForm = event.target;

    console.log(Object.fromEntries(new FormData(loginForm)))



}

function Login(props) {

        let useHis = useHistory();
        function goToSignup() {
            useHis.push("/signup");
        }

        return (
            <React.StrictMode>

                <div className="background"/>

                <img alt="Logo" src={Img} width={320} className="Full-Logo"/>

                <Container>
                    <Card className="signup-login-card">
                        <LittleTitleBox title="Login" />
                        <Card.Body>

                            <Form id="login-form" onSubmit={LoginStudent}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Numarul Matricol</Form.Label>
                                    <Form.Control name="registration" type="text" placeholder="310910401RSL..." />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Parola</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Parola123" />
                                </Form.Group>

                                {/* This checkbox does nothing */}
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="" />
                                </Form.Group>

                                <Button variant="info" type="submit">Login</Button>
                                <Button variant="light" className="d-inline float-right" onClick={goToSignup}>Creare Cont</Button>
                            </Form>

                        </Card.Body>
                    </Card>
                </Container>

            </React.StrictMode>
        );
    }


export default Login;
