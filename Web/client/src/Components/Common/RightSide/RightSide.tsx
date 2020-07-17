import React from 'react'
import LogoText from '../../../assets/full-logo.svg'
import {Container, Row, Image, Col} from "react-bootstrap";

export default function RightSide() {
    return (
        <React.StrictMode>

            <Col>
                <Row>
                    <Image src={LogoText} thumbnail style={{width: "100%"}} className="p-4" />
                </Row>
                <Row className="mt-3">

                </Row>
            </Col>
        </React.StrictMode>
    );
}
