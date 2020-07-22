import React, {useState} from "react";
import Img from '../../assets/full-logo.svg'
import {setCookie, getCookie} from '../../Globals/Cookie'
import {Alert, Button, Card, Container, Form} from "react-bootstrap";
import LittleTitleBox from "../Common/LittleTitleBox/LittleTitleBox";
import axios from 'axios'
import {API_SIGNUP_STUDENT, BACKEND_URL, LAST_SEMESTER_COOKIE, USER_ID_COOKIE} from "../../Globals/Variables";
import { useHistory } from 'react-router-dom';

const validCredentials = (registration, email, password) => {
//    TODO a more complex check
    if (registration === null || email === null || password === null) {
        return false;
    }

    if (registration.length < 6 || email.length < 10 || password < 8) {
        return false;
    }

    return true;
}

export default function SignUp() {

    const useHist = useHistory();

    const [errorSignup, setErrorSignup] = useState(false);

    const signupStudent = (event) => {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(event.target));

        if (!validCredentials(formData.registration, formData.email, formData.password)) {
            setErrorSignup(true);
            return;
        }

        if (!(formData.email === formData.re_email && formData.password === formData.re_password)) {
            setErrorSignup(true);
            return;
        }

        axios({
            url: BACKEND_URL + API_SIGNUP_STUDENT,
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                username: formData.registration,
                email: formData.email,
                password: formData.password,
            }
        }).then( res => {
            if (res.status === 204) {
                setErrorSignup(true);
            } else if (res.status === 201) {
                setCookie(USER_ID_COOKIE, res.data.token);
                setCookie(LAST_SEMESTER_COOKIE, "0");
                useHist.push("/home");
            }
        }).catch( e => {
            setErrorSignup(true);
        } )

    }

    return (
        <React.StrictMode>

            <div className="background"/>

            <img alt="Logo" src={Img} width={320} className="Full-Logo"/>

            <Container>
                <Card className="signup-login-card">
                    <LittleTitleBox title="Signup" />
                    <Card.Body>

                        <Form onSubmit={signupStudent}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Numarul Matricol" name="registration"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="email" placeholder="Email" name="email"/>
                                <Form.Text className="text-muted">
                                    V-a fi folosită pentru recuperarea parolei
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="email" placeholder="Confirma Email" name="re_email" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="password" placeholder="Parola" name="password"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="password" placeholder="Confirma Parola" name="re_password" />
                            </Form.Group>

                            {
                                errorSignup ?
                                    <Alert variant="danger">
                                        Error.
                                    </Alert>
                                    :
                                    ""
                            }

                            <Button variant="primary" type="submit" >Signup</Button>
                        </Form>

                    </Card.Body>
                </Card>
            </Container>
        </React.StrictMode>
    );
}
