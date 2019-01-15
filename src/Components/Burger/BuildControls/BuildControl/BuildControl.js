// JS IMPORTS
import React from 'react';

// CSS IMPORTS
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.Buildcontrol}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Remove}>Remove</button>
        <button className={classes.Add}>Add</button>
    </div>
);

export default buildControl;