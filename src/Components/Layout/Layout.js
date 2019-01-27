// JS IMPORTS
import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

// CSS IMPORTS
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    render() {
        return (
            <>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;