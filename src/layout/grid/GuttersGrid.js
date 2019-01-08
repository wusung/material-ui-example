import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";

const styles = theme => ({
    root: {
        flexFlow: 1
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2
    }
});

class GuttersGrid extends React.Component {
    state = {
        spacing: '16'
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value
        });
    };

    render() {
        const {classes} = this.props;
        const {spacing} = this.state;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {[0, 1, 2].map(value => (
                            <Grid key={value} item>
                                <Paper className={classes.paper} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.control}>
                        <Grid container>
                            <FormLabel>spacing</FormLabel>
                            <RadioGroup
                                name="spacing"
                                aria-label="Spacing"
                                value={spacing}
                                onChange={this.handleChange('spacing')}
                                row
                            >
                                <FormControlLabel control={<Radio/>} label="0" value="0"/>
                                <FormControlLabel control={<Radio/>} label="8" value="8"/>
                                <FormControlLabel control={<Radio/>} label="16" value="16"/>
                                <FormControlLabel control={<Radio/>} label="24" value="24"/>
                                <FormControlLabel control={<Radio/>} label="32" value="32"/>
                                <FormControlLabel control={<Radio/>} label="40" value="40"/>
                            </RadioGroup>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GuttersGrid);
