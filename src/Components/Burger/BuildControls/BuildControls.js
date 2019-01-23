// JS IMPORTS
import React from 'react';
import BuildControl from './BuildControl/BuildControl';

// CSS IMPORTS
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <div className={classes.BuildControlsBox}>
            {controls.map(ctlr => (
                <BuildControl
                    key={ctlr.label}
                    label={ctlr.label}
                    added={() => props.ingredientAdded(ctlr.type)}
                    removed={() => props.ingredientRemoved(ctlr.type)}
                    disabled={props.disabledIngredient[ctlr.type]}
                />
            ))}
        </div>
    </div>
);

export default buildControls;