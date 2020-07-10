import React from 'react'
import { Typography, Container } from '@material-ui/core';

export default function AppContent(props) {
  return (
    <Container>
      <Typography>
        {props.children}
      </Typography>
    </Container>
  );
}