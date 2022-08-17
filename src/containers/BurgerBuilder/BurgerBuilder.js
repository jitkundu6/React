import React, { Component } from "react";

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 15.5,
    bacon: 20,
    cheese: 9.5,
    meat: 35.4,
};

const BASE_PRICE = 50;

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 49,
    };

    addIngredientHandler = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]++;
        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newTotalPrice});
    }

    removeIngredientHandler = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        if (updatedIngredients[type] > 0) {
            updatedIngredients[type]--;
            const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({ingredients: updatedIngredients, totalPrice: newTotalPrice});
        }
    }

    // Similar to above `removeIngredientHandler` but implemented different way
    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount > 0) {
    //         const updatedCount = oldCount - 1;
    //         const updatedIngredients = {...this.state.ingredients};
    //         updatedIngredients[type] = updatedCount;
    //         const price = INGREDIENT_PRICES[type];
    //         const oldTotalPrice = this.state.totalPrice;
    //         const newTotalPrice = oldTotalPrice - price
    //         this.setState({ingredients: updatedIngredients, totalPrice: newTotalPrice}); 
    //     }  
    // }

    render() {
        let disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    price={this.state.totalPrice}
                    IngredientRemoved={this.removeIngredientHandler}
                    IngredientAdded={this.addIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.totalPrice >= BASE_PRICE}
                    />
            </Aux>
        );
    }
}

export default BurgerBuilder;