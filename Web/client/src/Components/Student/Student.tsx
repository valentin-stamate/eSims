import React from "react";
import { connect } from "react-redux"
import TopBar from "../Common/TopBar/TopBar";
import {Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import LeftSide from "../Common/LeftSide/LeftSide";
import RightSide from "../Common/RightSide/RightSide";
import Banner from "../../assets/banner.jpg";
import { useHistory } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {

    }
}

function Student(props) {

    const history = useHistory();
    const redirectToDetails = () => {
        history.push('/student/details');
    }
    const redirectToChangePassword = () => {
        history.push('/change-password');
    }

    return (
        <React.StrictMode>
            <TopBar />

            <Container>
                <Row>
                    <Col lg={{ span:2, order:1}} md={{ span:12, order:2}} xs={{ span:12, order:2}} className="pl-1 pr-1 mt-3">

                            <ListGroup>
                                <ListGroup.Item action variant="secondary" onClick={redirectToChangePassword}>Schimba Parola</ListGroup.Item>
                                <ListGroup.Item action variant="info" onClick={redirectToDetails}>Detalii si Note</ListGroup.Item>
                            </ListGroup>

                            <div className="mt-3">
                                <LeftSide />
                            </div>

                    </Col>
                    <Col lg={{ span:8, order:2}} md={{ span:12, order:1}} xs={{ span:12, order:1}} className="pl-2 pr-2 mt-3">
                        {/* Yeah yeah, i'm too lazy to make a CenterStudent component */}
                        <Image src={Banner} rounded style={{width: "100%"}}/>

                        <Card className="mt-3 p-4 text-center">
                            <h4>Componentă Web destinată studenţilor.</h4>
                            <p>Înregistrarea se poate face doar cu NUMARUL MATRICOL!</p>
                        </Card>

                    </Col>
                    <Col lg={{ span:2, order:3}} md={{ span:12, order:3}} xs={{ span:12, order:3}} className="pl-1 pr-1 mt-3">
                        <RightSide />
                    </Col>
                </Row>
            </Container>

        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(Student)
