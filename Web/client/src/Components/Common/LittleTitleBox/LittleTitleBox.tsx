import React from 'react'
import {Card} from "react-bootstrap";
import './LittleTitleBox.css'

const LittleTitleBox = (props) => {
    return (
        <React.StrictMode>

            <div className="box">
                {props.title}
            </div>

        </React.StrictMode>
    );
}

export default LittleTitleBox;
