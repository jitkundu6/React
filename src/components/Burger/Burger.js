import React from "react"

import BurgerCSS from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey} />;
            });
        });
    
    // flatten `transformedIngredients` array
    transformedIngredients = transformedIngredients.reduce((arr, element) => {
        return arr.concat(element)
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients! </p>
    }

    return (
        <div className={BurgerCSS.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/* <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/> */}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;