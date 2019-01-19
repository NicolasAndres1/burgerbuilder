// JS IMPORTS
import React from 'react';
import BuildControl from './BuildControl/BuildControl';

// CSS IMPORTS
import classes from './BuildControls.module.css';

const controls = [
    { label: 'salad', type: 'salad' },
    { label: 'cheese', type: 'cheese' },
    { label: 'bacon', type: 'bacon' },
    { label: 'meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctlr => (
            <BuildControl
                key = {ctlr.label}
                label = {ctlr.label}
                added = {() => props.ingredientAdded(ctlr.type)}
                removed = {() => props.ingredientRemoved(ctlr.type)}
                disabled = {props.disabledIngredient[ctlr.type]}
            />
        ))}
    </div>
);

export default buildControls;