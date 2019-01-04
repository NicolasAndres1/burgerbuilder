// JS IMPORTS
import React from 'react';

// CSS IMPORTS
import classes from './Layout.module.css';

const layout = (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout;