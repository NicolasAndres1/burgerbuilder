// JS IMPORTS
import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 2,
            cheese: 1,
            meat: 1
        }
    }

    render() {
        return(
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </>
        );
    }
}

export default BurgerBuilder;