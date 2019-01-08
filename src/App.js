import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

import AutoGrid from './layout/grid/AutoGrid';
import CenteredGrid from './layout/grid/CenteredGrid';
import FontAwesome from './FontAwesome';
import FullWithGrid from './layout/grid/FullWidthGrid';
import GuttersGrid from './layout/grid/GuttersGrid';
import InteractiveGrid from './layout/grid/InteractiveGrid';
import Icons from './Icons';
import StarIcon from './StarIcon';
import SvgMaterialIcons from "./SvgMaterialIcons";
import SvgIcons from './SvgIcons';
import TypographyTheme from './style/typegraphy/TypographyTheme';

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
            <Grid item xs={12}>
                <Icons />
            </Grid>
            <Grid item xs={12}>
                <FontAwesome />
            </Grid>
            <Grid item xs={12}>
                <TypographyTheme />
            </Grid>
            <Grid item xs={12}>
                <GuttersGrid />
            </Grid>
            <Grid item xs={12}>
                <CenteredGrid />
            </Grid>
            <Grid item xs={12}>
                <FullWithGrid />
            </Grid>
            <Grid item xs={12}>
                <InteractiveGrid />
            </Grid>
            <Grid item xs={12}>
                <AutoGrid />
            </Grid>

        </Grid>
    );
  }
}

export default App;
