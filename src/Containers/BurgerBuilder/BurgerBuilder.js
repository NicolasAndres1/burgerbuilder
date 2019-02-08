// JS IMPORTS
import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

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
        purchasable: false,
        purchasing: false
    }

    updatedPurchaseState(ingredients) {
        let sum = Object.keys(ingredients)
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

    purchaseHandler = () => (
        this.setState({ purchasing: true })
    );

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    };

    purchaseContinueHandler = () => {
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice.toFixed(2),
            customer: {
                name: 'Nicolas Andres',
                address: {
                    street: 'Calasanz',
                    number: '450',
                    zipCode: '7600',
                    country: 'Argentina'
                },
                email: 'nikoan97@hotmail.com'
            },
            deliveryHour: 'Right now'
        }
        axios.post('/orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    render() {
        const disabledIngredient = {
            ...this.state.ingredients
        };
        for (let key in disabledIngredient) {
            disabledIngredient[key] = disabledIngredient[key] <= 0;
        }

        return (
            <>
                <Modal showModal={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancel={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    disabledIngredient={disabledIngredient}
                    ordered={this.purchaseHandler}
                />
            </>
        );
    }
}

export default BurgerBuilder;