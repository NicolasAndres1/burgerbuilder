// JS IMPORTS
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

// CSS IMPORTS
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let attachedClass = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClass = [classes.SideDrawer, classes.Open];
    }


    return (
        <>
            <Backdrop 
                showModal={props.open} 
                clicked={props.closed}/>
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo} >
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;