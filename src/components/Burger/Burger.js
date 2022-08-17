import React from "react"

import BurgerCSS from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    return (
        <div className={BurgerCSS.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;