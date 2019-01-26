// JS IMPORTS
import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

// CSS IMPORTS
import classes from './Modal.module.css';

const modal = (props) => (
    <>
        <Backdrop
            showModal={props.showModal}
            clicked={props.modalClosed} />
        <div className={(classes.Modal)}
            style={{
                transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.showModal ? '1' : '0'
            }}>
            {props.children}
        </div>
    </>
);

export default modal;