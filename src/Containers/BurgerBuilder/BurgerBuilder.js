// JS IMPORTS
import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

// CSS IMPORTS
import classes from './BurgerBuilder.module.css';

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
        totalPrice: 4,
        purchasable: false
    }

    updatedPurchaseState(ingredients) {
        var sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
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
        this.updatedPurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        let count = this.state.ingredients[type];
        if (count <= 0) {
            return;
        }
        count -= 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = count;

        let reducedPrice = INGREDIENTS_PRICE[type];
        reducedPrice = this.state.totalPrice - reducedPrice;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: reducedPrice
        })
        this.updatedPurchaseState(updatedIngredients);
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
                <div className = {classes.Background}>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        disabledIngredient={disabledIngredient}
                    />
                </div>
            </>
        );
    }
}

export default BurgerBuilder;