import React from 'react';
import {
    Button,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";

function TopBar(props) {

    return (
        <React.StrictMode>

            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand>eSIMS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home" active={window.location.href.search("home") !== -1}>Acasa</Nav.Link>
                            <Nav.Link href="/students" active={window.location.href.search("students") !== -1}>Studenti</Nav.Link>
                            <Nav.Link href="/recover" active={window.location.href.search("recover") !== -1}>Recuperare Parola</Nav.Link>
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

export default TopBar
