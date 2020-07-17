import React from "react";
import TopBar from "../TopBar/TopBar";
import {Button, Card, Col, Container, Row, Table} from "react-bootstrap";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        
    }
}

let userDetails;
let userDetailsJSX: JSX.Element[] = [];
let studentTrajectory;
let studentTrajectoryJSX: JSX.Element[] = [];
let studentsGrades;
let studentsGradesJSX: JSX.Element[] = [];

function StudentDetails(props) {

    const dummyData = "Dummy Data"
    const tdAlign = "center";

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
        userDetailsJSX.push(<tr key={i + 1}><td>{userDetails[i].rowName}</td><td>{userDetails[i].rowValue}</td></tr>)
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
                <td><Button>Detalii</Button></td>
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
            <tr>
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
                    <Card.Header>Detalii Despre Student</Card.Header>
                    <Table size="sm" striped bordered className="m-0">
                        <tbody>
                        {/* One free for row spacing */}
                        <tr>
                            <td width={160}>ID</td>
                            <td align={tdAlign}>{dummyData}</td>
                        </tr>
                        {userDetailsJSX}
                        </tbody>
                    </Table>
                </Card>


                <Card className="mt-3">
                    <Card.Header>Traiectoria Studentului</Card.Header>
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
                    <Card.Header>Note '{'{Semestrul Curent}'}'</Card.Header>
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
                    <Card.Header>Traiectoria Mediilor</Card.Header>
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
                            <th>1</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                        </tr>
                        <tr>
                            <th>1 + 2</th>
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
