import React from 'react'
import { Container, Chip, Paper } from '@material-ui/core';

import './ContainerMD.css';

export default function ContainerMD(props) {

    let containerSize: String = "lg";
    if (props.containerSize !== null) {
        containerSize = props.containerSize;
    }

    let containerPadding = "padding-container";
    if (typeof props.padding !== "undefined") {
        containerPadding = containerPadding.concat("-", props.padding);
    }

    return (

        // @ts-ignore
        <Container maxWidth={containerSize} style={{ marginTop: "1rem", padding: "0" }}>
            <Paper className="container-spacer">
                {typeof props.containerTitle !== 'undefined'
                    ? <Chip className="chip" label={props.containerTitle} />
                    : null
                }

                <div className={containerPadding}>
                    {props.children}
                </div>

            </Paper>
        </Container>

    );
}


