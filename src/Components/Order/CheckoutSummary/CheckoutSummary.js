import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div className={classes.Div}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
        </div>
    );
}

export default checkoutSummary;