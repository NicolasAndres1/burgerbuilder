// JS IMPORTS
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

// CSS IMPORTS
import classes from './SideDrawer.module.css';

const sideDrawer = () => {

    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo} >
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;