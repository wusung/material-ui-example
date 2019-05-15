import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MarkdownElement from '@material-ui/docs/MarkdownElement';
import Grid from '@material-ui/core/Grid';
import RootRef from '@material-ui/core/RootRef';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    scrollContainer: {
        height: 400,
        overflow: 'auto',
        marginBottom: theme.spacing.unit * 3,
    },
    scroll: {
        position: 'relative',
        width: '230%',
        backgroundColor: theme.palette.background.paper,
        height: '230%',
    },
    legend: {
        marginTop: theme.spacing.unit * 2,
        maxWidth: 300,
    },
    paper: {
        maxWidth: 400,
        overflow: 'auto',
    },
    select: {
        width: 200,
    },
    popper: {
        zIndex: 1,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${theme.palette.common.white} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${theme.palette.common.white} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${theme.palette.common.white}`,
            },
        },
    },
    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
});

class AnchorPlayground extends React.Component {
    state = {
        arrow: false,
        arrowRef: null,
        disablePortal: false,
        flip: true,
        open: false,
        placement: 'bottom',
        preventOverflow: 'scrollParent',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    handleCHangeTarget = key => event => {
        this.setState({
            [key]: event.target.value
        });
    };

    handleClickButton = () => {
        this.setState(state => ({
            open: !state.open,
        }));
    };

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };

    centerScroll = ref => {
        if (!ref) {
            return;
        }

        const container = ref.parentElement;
        container.scrollTop = ref.clientHeight / 4;
        container.scrollLeft = ref.clientWidth / 4;
    };

    render() {
        const { classes } = this.props;
        const { open, placement, disablePortal, flip, preventOverflow, arrow, arrowRef } = this.state;

        const node = `
\`\`\`jsx
<Popper
  placement="${placement}"
  disablePortal={${disablePortal}}
  modifiers={{
    flip: {
      enabled: ${flip},
    },
    preventOverflow: {
      enabled: ${preventOverflow !== 'disabled'},
      boundariesElement: '${preventOverflow === 'disabled' ? 'scrollParent' : preventOverflow}',
    },
    arrow: {
      enabled: ${arrow},
      element: arrowRef,
    },
  }}
>
\`\`\`
`;
        const id = open ? 'scroll-playground' : null;

        return (

        );
    }
}
