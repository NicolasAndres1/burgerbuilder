import React from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
    state = {
        ingredients: {
            cheese: 1,
            bacon: 1,
            meat: 1,
            salad: 1
        }
    }

    render() {
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;