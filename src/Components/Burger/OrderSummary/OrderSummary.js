import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key = {igKey}>
                    <span style = {{textTransform: 'capitalize'}}> {igKey} </span>: {props.ingredients[igKey]} 
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
            <p>Continue To CheckOut?</p>
        </>
    );
};

export default orderSummary;