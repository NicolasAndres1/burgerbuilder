// JS IMPORTS
import React from 'react';
import { withRouter } from 'react-router-dom';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// CSS IMPORTS
import classes from './Burger.module.css';

const burger = (props) => {
    console.log(props);
    
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, index) => {
                    return <BurgerIngredient key={igKey + index} type={igKey} />;
                }
                );
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);