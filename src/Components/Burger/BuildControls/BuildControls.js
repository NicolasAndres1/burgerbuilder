// JS IMPORTS
import React from 'react';

// CSS IMPORTS
import classes from './BuildControls.module.css';

const controls = [
    { label: 'salad', type: 'salad'},
    { label: 'cheese', type: 'cheese'},
    { label: 'bacon', type: 'bacon'},
    { label: 'meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControl}>

    </div>    
);

export default buildControls;