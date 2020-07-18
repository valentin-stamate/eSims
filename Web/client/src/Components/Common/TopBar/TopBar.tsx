import React from 'react';
import {Button, Container, DropdownButton, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {GET_USER_BASIC_DATA} from "../../../Redux/actions";
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {getCookie} from "../../../Globals/Cookie";

const mapStateToProps = state => {
    return {
        username: state.userBasicData.username,
        email: state.userBasicData.email,
    }
}

function fetchBasicData(props) {

    const token = getCookie('user_id');

    axios({
        method: 'GET',
        url: 'http://localhost:8000/api/get/user-basic-data/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token,
        }
    }).then( result => {

        props.dispatch({
            type: GET_USER_BASIC_DATA,
            data: result.data,
        })
    } )
}

function TopBar(props) {

    console.log("Render")

    fetchBasicData(props)

    const history = useHistory();
    const redirectToHome = () => {
        history.push('/home');
    }
    const redirectToStudents = () => {
        history.push('/student');
    }

    return (
        <React.StrictMode>
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand>eSIMS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={redirectToHome} active={window.location.href.search("home") !== -1}>Acasa</Nav.Link>
                            <Nav.Link onClick={redirectToStudents} active={window.location.href.search("student") !== -1}>Studenti</Nav.Link>
                        </Nav>

                        <Form inline>
                            <DropdownButton variant="success" title="Student" className="mr-sm-2">
                                <NavDropdown.Item>{props.username}</NavDropdown.Item>
                                <NavDropdown.Item>{props.email}</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item>Copy Registration</NavDropdown.Item>
                            </DropdownButton>{' '}
                            <Button variant="warning">Logout</Button>{' '}
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(TopBar);
