import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    componentWillUpdate() {
        // This could be a functional component
        console.log("[OrderSummary] willUpdate");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}> {igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return (
            <Aux>
                <h3> Your Order</h3>
                <p> A delicious burger with ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: <b>₹{this.props.price.toFixed(2)}</b> </strong></p>
                <p>Continue to checkout?</p>
                <Button type="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button type="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;