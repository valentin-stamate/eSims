import React from "react";
import TopBar from "../TopBar/TopBar";
import LeftSide from "../Common/LeftSide/LeftSide";
import RightSide from "../Common/RightSide/RightSide";
import CenterSide from "../Common/CenterSide/CenterSide";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../Footer/Footer";

function Home() {

    return (
        <React.StrictMode>

            <div id="page-container">
                <div id="page-content">
                    <TopBar />
                    <Container>
                        <Row>
                            <Col lg={{ span:2, order:1}} md={{ span:12, order:2}} xs={{ span:12, order:2}} className="pl-1 pr-1 mt-3">
                                <LeftSide />
                            </Col>
                            <Col lg={{ span:8, order:2}} md={{ span:12, order:1}} xs={{ span:12, order:1}} className="pl-2 pr-2 mt-3">
                                <CenterSide />
                            </Col>
                            <Col lg={{ span:2, order:3}} md={{ span:12, order:3}} xs={{ span:12, order:3}} className="pl-1 pr-1 mt-3">
                                <RightSide />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer/>
            </div>

        </React.StrictMode>
    );
}

export default Home;
