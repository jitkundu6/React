import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}> {igKey}</span>: {props.ingredients[igKey]}
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
            <p><strong>Total Price: <b>₹{props.price.toFixed(2)}</b> </strong></p>
            <p>Continue to checkout?</p>
            <Button type="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button type="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>

    );
};

export default orderSummary;