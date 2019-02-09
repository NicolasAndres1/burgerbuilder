// JS IMPORTS
import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';

// CSS IMPORTS
import classes from './Modal.module.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.showModal !== this.props.showModal || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (
            <>
                <Backdrop
                    showModal={this.props.showModal}
                    clicked={this.props.modalClosed} />
                <div className={(classes.Modal)}
                    style={{
                        transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.showModal ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;