import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useSelector } from 'react-redux';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 150,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function LoadingComponent() {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const isLoading = useSelector(state => state.appState.isLoading)
    return (
        <>
            {isLoading.state && <div className={classes.root} ref={rootRef}>
                <div>
                    <p id="server-modal-title">{`${isLoading.ref} is loading ...`}</p>
                    <LinearProgress color="secondary" />
                </div>
            </div>}
        </>
    )
}
