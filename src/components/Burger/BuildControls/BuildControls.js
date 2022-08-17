import React from "react";
import BuildControlsCSS from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
];

const buildControls = (props) => {
    console.log(props.d)
    return (
        <div className={BuildControlsCSS.BuildControls}>
            <p> Total Price: <b>₹{props.price.toFixed(2)}</b> </p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.IngredientAdded(ctrl.type)}
                    removed={() => props.IngredientRemoved(ctrl.type)}
                    disabledLess={props.disabled[ctrl.type]} 
                />
            ))}
            <button className={BuildControlsCSS.OrderButton} disabled={!props.purchasable}>
                <strong> Order Now! </strong>
            </button>
        </div>
    )
};

export default buildControls;