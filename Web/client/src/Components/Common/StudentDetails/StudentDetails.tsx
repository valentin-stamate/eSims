import React from "react";
import TopBar from "../TopBar/TopBar";
import {Button, Card, Col, Container, Row, Table} from "react-bootstrap";
import { connect } from 'react-redux';
import axios from 'axios'
import {getCookie} from "../../../Globals/Cookie";
import {GET_SEMESTER_CLASSES, GET_SEMESTERS, GET_USER_DATA} from "../../../Redux/actions";

const mapStateToProps = (state) => {
    return {
        studentData: state.userData,
        semesters: state.userSemesters,
        semesterClasses: state.semesterClasses,
    }
}

let fetchedStudentData = false;
const fetchUserData = (props) => {

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

    axios({
        method: "GET",
        url: "http://localhost:8000/api/get/semesters",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token,
        }
    }).then( result => {
        props.dispatch({
            type: GET_SEMESTERS,
            data: result.data,
        });
    } );
}

// TODO find a wae to get the props nicely
let propsRef;
const showSemesterGrades = (event) => {

    const key = event.target.getAttribute('button-key');

    const token = getCookie('user_id');

    axios({
        method: "POST",
        url: "http://localhost:8000/api/get/semester-class-grades",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token,
        },
        data: {
            'semester-key': key
        },
    }).then( result => {
        propsRef.dispatch({
            type: GET_SEMESTER_CLASSES,
            data: result.data,
        })
    } )

}


function StudentDetails(props) {
    propsRef = props;
    let studentTrajectoryJSX: JSX.Element[] = [];
    let studentsGradesJSX: JSX.Element[] = [];

    if (!fetchedStudentData) {
        fetchedStudentData = true;
        fetchUserData(props)
    }

    // Semester List
    for (let i = 0; i < props.semesters.length; i++) {
        studentTrajectoryJSX.push(
            <tr key={i}>
                <td>{props.semesters[i].year}</td>
                <td>{props.semesters[i].year_of_study}</td>
                <td>{props.semesters[i].semester}</td>
                <td>{props.semesters[i].group}</td>
                <td>{props.semesters[i].domain}</td>
                <td><Button button-key={props.semesters[i].id} onClick={showSemesterGrades} variant="info">Detalii</Button></td>
            </tr>
        );
    }

    // Semester Classes
    for (let i = 0; i < props.semesterClasses.length; i++) {

        studentsGradesJSX.push(
            <tr key={i}>
                <th>{props.semesterClasses[i].semester_number}</th>
                <th>{props.semesterClasses[i].class_name}</th>
                <th>{props.semesterClasses[i].class_grade}</th>
                <th>{props.semesterClasses[i].class_credits}</th>
                <th>{props.semesterClasses[i].date}</th>
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
                        {/*<tr>*/}
                        {/*    <td width={160}>ID</td>*/}
                        {/*    <td align={tdAlign}>112112</td>*/}
                        {/*</tr>*/}
                        <tr><td>Nume</td><td className="text-center">{props.studentData.full_name}</td></tr>
                        <tr><td>Matricol</td><td className="text-center">{props.studentData.registration}</td></tr>
                        <tr><td>Telefon</td><td className="text-center">{props.studentData.phone}</td></tr>
                        <tr><td>EMail</td><td className="text-center">{props.studentData.email}</td></tr>
                        <tr><td>Data Nasterii</td><td className="text-center">{props.studentData.birth}</td></tr>
                        <tr><td>Mama</td><td className="text-center">{props.studentData.mother_firstname}</td></tr>
                        <tr><td>Tata</td><td className="text-center">{props.studentData.father_firstname}</td></tr>
                        <tr><td>Nationalitatea</td><td className="text-center">{props.studentData.nationalit}</td></tr>
                        <tr><td>Cetatenia</td><td className="text-center">{props.studentData.citizenship}</td></tr>
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
