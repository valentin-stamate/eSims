import React, { useState } from 'react';
import Img from '../../assets/full-logo.svg'
import {Alert, Button, Card, Container, Form} from "react-bootstrap";
import LittleTitleBox from "../Common/LittleTitleBox/LittleTitleBox";
import { useHistory } from "react-router-dom"
import axios from 'axios'
import {setCookie} from "../../Globals/Cookie";
import {BACKEND_URL, API_LOGIN_STUDENT, USER_ID_COOKIE} from "../../Globals/Variables";


function Login(props) {

        let useHis = useHistory();
        function goToSignup() {
            useHis.push("/signup");
        }

        const [errorLogin, setErrorLogin] = useState(false);

        const LoginStudent = (event) => {
            event.preventDefault();

            const loginForm = event.target;

            const formData = Object.fromEntries(new FormData(loginForm));

            axios({
                url: BACKEND_URL + API_LOGIN_STUDENT,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    username: formData.username,
                    password: formData.password,
                }
            }).then( res => {
                setCookie(USER_ID_COOKIE, res.data.token);
                useHis.push("/home");
            }).catch( error => {
                setErrorLogin(true);
            } )

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
                                    <Form.Control name="username" type="text" placeholder="310910401RSL..." />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Parola</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Parola123" />
                                </Form.Group>

                                {/* This checkbox does nothing */}
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="" />
                                </Form.Group>

                                {
                                    errorLogin ?
                                    <Alert variant="danger">
                                        Student doesn't exist.
                                    </Alert>
                                    :
                                    ""
                                }

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
