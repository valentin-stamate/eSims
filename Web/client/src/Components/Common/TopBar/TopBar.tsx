import React, {Component} from 'react';
import {Button, Container, DropdownButton, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {GET_USER_BASIC_DATA} from "../../../Redux/actions";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {getCookie} from "../../../Globals/Cookie";


let dataFetch = false;
class TopBar extends Component<any, any> {

    fetchBasicData(props) {
        console.log("TopBar fetch")
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
                                    <NavDropdown.Item>{this.props.username}</NavDropdown.Item>
                                    <NavDropdown.Item>{this.props.email}</NavDropdown.Item>

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

}


const mapStateToProps = state => {
    return {
        username: state.userBasicData.username,
        email: state.userBasicData.email,
    }
}

export default connect(mapStateToProps)(TopBar);
