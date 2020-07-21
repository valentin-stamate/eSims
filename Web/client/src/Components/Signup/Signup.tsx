import React from "react";
import Img from '../../assets/full-logo.svg'
import {setCookie, getCookie} from '../../Globals/Cookie'
import {Button, Card, Container, Form} from "react-bootstrap";
import LittleTitleBox from "../Common/LittleTitleBox/LittleTitleBox";

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
        <React.StrictMode>

            <div className="background"/>

            <img alt="Logo" src={Img} width={320} className="Full-Logo"/>

            <Container>
                <Card className="signup-login-card">
                    <LittleTitleBox title="Signup" />
                    <Card.Body>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Numarul Matricol" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="email" placeholder="Email" />
                            <Form.Text className="text-muted">
                                V-a fi folosită pentru recuperarea parolei
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="email" placeholder="Confirma Email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="password" placeholder="Parola" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="password" placeholder="Confirma Parola" />
                        </Form.Group>







                        <Button variant="primary">Signup</Button>

                    </Card.Body>
                </Card>
            </Container>
        </React.StrictMode>
    );
}
