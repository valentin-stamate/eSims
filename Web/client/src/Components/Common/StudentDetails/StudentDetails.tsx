import React from "react";
import TopBar from "../../TopBar/TopBar";
import {Button, Card, Container, Table} from "react-bootstrap";
import { connect } from 'react-redux';
import axios from 'axios'
import {getCookie, setCookie} from "../../../Globals/Cookie";
import {GET_SEMESTER_CLASSES, GET_SEMESTERS, GET_USER_DATA} from "../../../Redux/actions";
import Footer from "../../Footer/Footer";
import {
    API_GET_SEMESTER_CLASS_GRADES, API_GET_SEMESTERS_DATA, API_GET_STUDENT_DATA,
    BACKEND_URL,
    LAST_SEMESTER_COOKIE,
    USER_ID_COOKIE
} from "../../../Globals/Variables";

const mapStateToProps = (state) => {
    return {
        studentData: state.userData,
        semesters: state.userSemesters,
        semesterClasses: state.semesterClasses,
        semestersResult: state.semestersResult,
        yearResult: state.yearResult,
    }
}

let fetchedStudentData = false;
const fetchUserData = (props) => {

    const token = getCookie(USER_ID_COOKIE);

    axios({
        method: 'get',
        url: BACKEND_URL + API_GET_STUDENT_DATA,
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
        url: BACKEND_URL + API_GET_SEMESTERS_DATA,
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

    let key;
    if (event === null) {
        key = getCookie(LAST_SEMESTER_COOKIE);
    } else {
        key = event.target.getAttribute('button-key');
        setCookie(LAST_SEMESTER_COOKIE, key);
    }

    const token = getCookie('user_id');

    axios({
        method: "POST",
        url: BACKEND_URL + API_GET_SEMESTER_CLASS_GRADES,
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
            semesterClasses: result.data.classes,
            semestersResult: result.data.semesters_result,
            yearResult: result.data.year_result,
        })
    } )

}

let semesterGradesFetch = false;

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
        if (i === 0) {
            if (getCookie(LAST_SEMESTER_COOKIE) === null || getCookie(LAST_SEMESTER_COOKIE) === '0')
                setCookie(LAST_SEMESTER_COOKIE, props.semesters[i].id);
        }
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

    if (!semesterGradesFetch && getCookie(LAST_SEMESTER_COOKIE) !== '0') {
        showSemesterGrades(null);
        semesterGradesFetch = true;
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

            <div id="page-container">
                <div id="page-content">

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
                            <Card.Header as="h5" className="bg-danger text-light">Note</Card.Header>
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
                                    <th>{props.semestersResult[0].semester}</th>
                                    <th>{props.semestersResult[0].average_grade}</th>
                                    <th>{props.semestersResult[0].points}</th>
                                    <th>{props.semestersResult[0].credits}</th>
                                </tr>
                                <tr>
                                    <th>{props.semestersResult[1].semester}</th>
                                    <th>{props.semestersResult[1].average_grade}</th>
                                    <th>{props.semestersResult[1].points}</th>
                                    <th>{props.semestersResult[1].credits}</th>
                                </tr>
                                <tr >
                                    <th>Total</th>
                                    <th>{props.yearResult.average_grade}</th>
                                    <th>{props.yearResult.points}</th>
                                    <th>{props.yearResult.credits}</th>
                                </tr>

                                </tbody>
                            </Table>
                        </Card>

                    </Container>
                </div>
                <Footer />
            </div>

        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(StudentDetails)
