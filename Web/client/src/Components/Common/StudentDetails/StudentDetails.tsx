import React from "react";
import TopBar from "../TopBar/TopBar";
import {Button, Card, Col, Container, Row, Table} from "react-bootstrap";
import { connect } from 'react-redux';
import axios from 'axios'
import {getCookie} from "../../../Globals/Cookie";
import {GET_USER_DATA} from "../../../Redux/actions";

const mapStateToProps = (state) => {
    return {
        registration: state.userData.registration,
        full_name: state.userData.full_name,
        phone: state.userData.phone,
        email: state.userData.email,
        birth: state.userData.birth,
        mother_firstname: state.userData.mother_firstname,
        father_firstname: state.userData.father_firstname,
        nationality: state.userData.nationality,
        citizenship: state.userData.citizenship
    }
}

const fetchUserData= (props) => {

    const token = getCookie('user_id');

    axios({
        method: 'get',
        url: 'http://localhost:8000/api/get/user-data',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token,
        }
    }).then( result => {

        props.dispatch({
           type: GET_USER_DATA,
           data: result.data,
        });
    } );
}

function StudentDetails(props) {

    let userDetails;
    let userDetailsJSX: JSX.Element[] = [];
    let studentTrajectory;
    let studentTrajectoryJSX: JSX.Element[] = [];
    let studentsGrades;
    let studentsGradesJSX: JSX.Element[] = [];

    const dummyData = "Dummy Data"
    const tdAlign = "center";

    fetchUserData(props)

    userDetails = [
        {
            rowName: "Nume",
            rowValue: props.name,
        },
        {
            rowName: "Matricol",
            rowValue: props.registration,
        },
        {
            rowName: "Telefon",
            rowValue: props.phone,
        },
        {
            rowName: "EMail",
            rowValue: props.email,
        },
        {
            rowName: "Data Nasterii",
            rowValue: props.born,
        },
        {
            rowName: "Mama",
            rowValue: props.mother,
        },
        {
            rowName: "Tata",
            rowValue: props.father,
        },
        {
            rowName: "Nationalitatea",
            rowValue: props.nationality,
        },
        {
            rowName: "Cetatenia",
            rowValue: props.citizenship,
        },
    ]

    for (let i = 0; i < userDetails.length; i++) {
        userDetailsJSX.push(<tr key={i + 1}><td>{userDetails[i].rowName}</td><td className="text-center">{userDetails[i].rowValue}</td></tr>)
    }

    // Dummy Testing
    studentTrajectory = [
        {
            year: "2019",
            yearOfStudy: "1",
            semester: 1,
            group: "Semian B/B4",
            specialization: "Informatica"
        }
    ];

    for (let i = 0; i < studentTrajectory.length; i++) {
        studentTrajectoryJSX.push(
            <tr key={i}>
                <td>{studentTrajectory[i].year}</td>
                <td>{studentTrajectory[i].yearOfStudy}</td>
                <td>{studentTrajectory[i].semester}</td>
                <td>{studentTrajectory[i].group}</td>
                <td>{studentTrajectory[i].specialization}</td>
                <td><Button variant="info">Detalii</Button></td>
            </tr>
        );
    }

    // Dummy Testing
    studentsGrades = [
        {
            year: 2019,
            semester: 1,
            className: "Arhitectura Calculatoarelor Si Sisteme De Operare",
            finalGrade: 10,
            credits: 5,
            date: "19.01.2020",
        }
    ]

    for (let i = 0; i < studentsGrades.length; i++) {
        studentsGradesJSX.push(
            <tr key={i}>
                <th>{studentsGrades[i].year}</th>
                <th>{studentsGrades[i].semester}</th>
                <th>{studentsGrades[i].className}</th>
                <th>{studentsGrades[i].finalGrade}</th>
                <th>{studentsGrades[i].credits}</th>
                <th>{studentsGrades[i].date}</th>
            </tr>
        );
    }

    return (
        <React.StrictMode>
            <TopBar />

            <Container>


                <Card className="mt-3">
                    <Card.Header className="bg-warning text-light" as="h5">Detalii Despre Student</Card.Header>
                    <Table size="sm" striped bordered className="m-0">
                        <tbody>
                        {/* One free for row spacing */}
                        <tr>
                            <td width={160}>ID</td>
                            <td align={tdAlign}>112112</td>
                        </tr>
                        {userDetailsJSX}
                        </tbody>
                    </Table>
                </Card>


                <Card className="mt-3">
                    <Card.Header as="h5" className="bg-success text-light">Traiectoria Studentului</Card.Header>
                    <Table size="sm" striped bordered className="m-0">
                        <thead>
                        <tr className="text-center">
                            <th>An Scolar</th>
                            <th>An Studiu</th>
                            <th>Semestru</th>
                            <th>Grupa</th>
                            <th>Specializare</th>
                            <th> </th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                            {studentTrajectoryJSX}
                        </tbody>
                    </Table>
                </Card>


                <Card className="mt-3">
                    <Card.Header as="h5" className="bg-danger text-light">Note '{'{Semestrul Curent}'}'</Card.Header>
                    <Table size="sm" striped bordered className="m-0">
                        <thead>
                        <tr className="text-center">
                            <th>AnUniv</th>
                            <th>Semestru</th>
                            <th>Disciplina</th>
                            <th>Nota Finala</th>
                            <th>Credite</th>
                            <th>Data</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                            {studentsGradesJSX}
                        </tbody>
                    </Table>
                </Card>


                <Card className="mt-3">
                    <Card.Header as="h5" className="bg-secondary text-light">Traiectoria Mediilor</Card.Header>
                    <Table size="sm" striped bordered className="m-0">
                        <thead>
                        <tr className="text-center">
                            <th>Semestru</th>
                            <th>Medie</th>
                            <th>Puncte</th>
                            <th>Credite/An</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <th>1</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                        </tr>
                        <tr unselectable={'on'}>
                            <th>Total</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                        </tr>

                        </tbody>
                    </Table>
                </Card>

            </Container>
        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(StudentDetails)
