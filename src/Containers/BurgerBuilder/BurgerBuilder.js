// JS IMPORTS
import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
    salad: 0.4,
    bacon: 0.7,
    cheese: 0.5,
    meat: 1.1
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        let count = this.state.ingredients[type];
        count += 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = count;

        let priceAdded = INGREDIENTS_PRICE[type];
        priceAdded += this.state.totalPrice;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: priceAdded
        });
    }

    removeIngredientHandler = (type) => {
        let count =this.state.ingredients[type];
        if(count <=0) {
            return;
        }
        count -= 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = count;

        let reducedPrice = INGREDIENTS_PRICE[type];
        reducedPrice -= this.state.totalPrice;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: reducedPrice
        })
    }

    render() {
        const disabledIngredient = {
            ...this.state.ingredients
        };
        for (let key in disabledIngredient) {
            disabledIngredient[key] = disabledIngredient[key] <= 0;
        }

        return (
            <>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabledIngredient = {disabledIngredient}
                />
            </>
        );
    }
}

export default BurgerBuilder;