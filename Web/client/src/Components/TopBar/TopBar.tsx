import React, {Component} from 'react';
import {Button, Container, DropdownButton, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {GET_USER_BASIC_DATA} from "../../Redux/actions";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {deleteCookie, getCookie, setCookie} from "../../Globals/Cookie";
import {API_GET_STUDENT_SIMPLE_DATA, BACKEND_URL, LAST_SEMESTER_COOKIE, USER_ID_COOKIE} from "../../Globals/Variables";


let dataFetch = false;
class TopBar extends Component<any, any> {

    constructor(props) {
        super(props);

        if (getCookie(USER_ID_COOKIE) === null) {
            window.location.replace("/");
        }

    }

    fetchBasicData(props) {
        const token = getCookie(USER_ID_COOKIE);

        axios({
            method: 'GET',
            url: BACKEND_URL + API_GET_STUDENT_SIMPLE_DATA,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + token,
            }
        }).then( result => {

            props.dispatch({
                type: GET_USER_BASIC_DATA,
                data: result.data,
            })
        } ).catch( res => {
            // TODO what if there is a server error, the user will be logged out
            window.location.replace("/");
        } )
    }

    logout = () => {
        deleteCookie(USER_ID_COOKIE);
        deleteCookie(LAST_SEMESTER_COOKIE);
        window.location.replace("/");
    }

    copyRegistration = () => {



        const copyText = this.props.registration;
        let el = document.createElement('textarea');
        el.value = copyText;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-400px';

        document.body.appendChild(el)

        el.select()
        el.setSelectionRange(0, 99999); /*For mobile devices*/

        document.execCommand("copy");
        document.body.removeChild(el);
    }

    linkHighLight(path: string): string {
        return window.location.href.search(path) !== -1 ? 'text-dark' : 'text-muted';
    }

    render() {

        if (!dataFetch) {
            dataFetch = true;
            this.fetchBasicData(this.props);
        }

        return (
            <React.StrictMode>

                <Navbar bg="light" expand="md">
                    <Container>
                        <Navbar.Brand>eSIMS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/home"><Nav.Item className={this.linkHighLight("/home") + " mr-3"}>Acasa</Nav.Item></Link>
                                <Link to="/student"><Nav.Item className={this.linkHighLight("/student")}>Student</Nav.Item></Link>
                            </Nav>

                            <Form inline>
                                <DropdownButton variant="success" title="Student" className="mr-sm-2">
                                    <NavDropdown.Item>{this.props.registration}</NavDropdown.Item>
                                    <NavDropdown.Item>{this.props.email}</NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={this.copyRegistration}>Copy Registration</NavDropdown.Item>
                                </DropdownButton>{' '}
                                <Button variant="warning" className="text-white" onClick={this.logout}>Logout</Button>{' '}
                            </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </React.StrictMode>
        );
    }

}


const mapStateToProps = state => {
    return {
        registration: state.userBasicData.username,
        email: state.userBasicData.email,
    }
}

export default connect(mapStateToProps)(TopBar);
