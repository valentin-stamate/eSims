import React, { Component } from 'react'
import TopBar from '../TopBar/TopBar'
import LinksContainer from '../LinksContainer/LinksContainer'
import RightSide from '../RigthSide/RightSide'
import { Typography, Grid } from '@material-ui/core';
import AppContent from '../AppContent/AppContent'
import HomeContent from '../HomeContent/HomeContent';


class Home extends Component {

  render() {
    return (
      <div>
        <TopBar />

        <AppContent>
        
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <LinksContainer />
            </Grid>
            <Grid item xs={12} md={6}>
              
              <HomeContent />

            </Grid>
            <Grid item xs={12} md={3}>
              <RightSide />
            </Grid>
          </Grid>
        
        </AppContent>
      </div>
    );
  }

}

export default Home