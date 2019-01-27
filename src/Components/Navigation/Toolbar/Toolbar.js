// JS IMPORTS
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

// CSS IMPORTS
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <div>MENU</div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;