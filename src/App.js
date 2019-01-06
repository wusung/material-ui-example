import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import StarIcon from './StarIcon';
import SvgMaterialIcons from "./SvgMaterialIcons";
import SvgIcons from './SvgIcons';

class App extends Component {
  render() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <StarIcon />
            </Grid>
            <Grid item xs={12}>
                <SvgMaterialIcons />
            </Grid>
            <Grid item xs={12}>
                <SvgIcons />
            </Grid>
        </Grid>
    );
  }
}

export default App;
