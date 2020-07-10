import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Grid, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

class TopBar extends Component {
  
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            
            <Container>
              <Grid container justify="space-between">
                <Grid item className="test-color">
                  <Button color="inherit" className="test-align">Acasa</Button>
                  <Button color="inherit">Studenti</Button>
                  <Button color="inherit">Recuperare Parola</Button>

                </Grid>

                <Grid item>
  
                <IconButton aria-label="User" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                  <AccountCircle />
                </IconButton>
                </Grid>
              </Grid>

            </Container>

          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

export default TopBar