import React from 'react'
import { Typography, Container, Button, TextField, Chip, Paper } from '@material-ui/core';

import './ContainerMD.css';

function ContainerMD(props) {

  let containerSize = 'lg';
  if (typeof props.containerSize !== 'undefined') {
    containerSize = props.containerSize;
  }

  let containerPadding = "padding-container";
  if (typeof props.padding !== 'undefined') {
    containerPadding = containerPadding.concat("-", props.padding);
  }

  return (

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

export default ContainerMD;