import React, { Component } from "react";
import PropTypes from 'prop-types';

import BurgerIngredientCSS from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={BurgerIngredientCSS.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={BurgerIngredientCSS.BreadTop}>
                        <div className={BurgerIngredientCSS.Seeds1}></div>
                        <div className={BurgerIngredientCSS.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={BurgerIngredientCSS.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={BurgerIngredientCSS.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={BurgerIngredientCSS.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={BurgerIngredientCSS.Bacon}></div>;
                break;
            default:
                ingredient = null;             
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredient;