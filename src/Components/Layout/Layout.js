// JS IMPORTS
import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

// CSS IMPORTS
import classes from './Layout.module.css';

const layout = (props) => (
    <>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout;