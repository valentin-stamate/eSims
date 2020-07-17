import React from "react";
import TopBar from "../Common/TopBar/TopBar";
import {Col, Container, Row} from "react-bootstrap";
import LeftSide from "../Common/LeftSide/LeftSide";
import RightSide from "../Common/RightSide/RightSide";
import StudentInfo from "../Common/StudentInfo/StudentInfo";

export default function Students() {
    return (
        <React.StrictMode>
            <TopBar />

            <Container>
                <Row>
                    <Col lg={{ span:2, order:1}} md={{ span:12, order:2}} xs={{ span:12, order:2}} className="pl-1 pr-1 mt-3">
                        <LeftSide />
                    </Col>
                    <Col lg={{ span:8, order:2}} md={{ span:12, order:1}} xs={{ span:12, order:1}} className="pl-2 pr-2 mt-3">
                        <StudentInfo />
                    </Col>
                    <Col lg={{ span:2, order:3}} md={{ span:12, order:3}} xs={{ span:12, order:3}} className="pl-1 pr-1 mt-3">
                        <RightSide />
                    </Col>
                </Row>
            </Container>

        </React.StrictMode>
    );
}
