// JS IMPORTS
import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key = {igKey}>
                    <span style = {{textTransform: 'capitalize'}}> {igKey} </span>: {this.props.ingredients[igKey]} 
                </li>);
        });

        return(
            <>
            <h3>Your Order</h3>
            <hr />
            <p>Burger with:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong> Total Price : {this.props.price.toFixed(2)}</strong></p>
            <p>Continue To CheckOut?</p>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
        </>
        );
    }
}


export default OrderSummary;