import React from "react";
import {Card, Table} from "react-bootstrap";

export default function StudentInfo(props) {
    return (
        <React.StrictMode>
            <Card.Header>
                Detalii Student
            </Card.Header>

            <Table style={{marginTop:"1px"}} striped bordered hover>
                <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>

        </React.StrictMode>
    );
}
