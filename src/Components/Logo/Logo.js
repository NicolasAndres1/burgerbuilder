// JS IMPORTS
import React from 'react';
import burgerLogo from '../../Assets/Images/burger-logo.png'

// CSS IMPORTS
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img 
            src={burgerLogo}
            alt="burgerLogo"/>
    </div>
);

export default logo;