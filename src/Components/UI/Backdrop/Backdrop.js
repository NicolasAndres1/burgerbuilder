// JS IMPORTS
import React from 'react';

// CSS IMPORTS
import classes from './Backdrop.module.css';

const backdrop = (props) => (
    props.showModal ? <div className={classes.Backdrop}
        onClick={props.clicked}
    ></div> : null
);

export default backdrop;