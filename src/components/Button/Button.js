import React from "react";
import ButtonCSS from "./Button.module.css";

const button = (props) => {
    let buttonType = props.type;
    if (props.type === "submit")
        buttonType = "Success";
    
    return (
        <button
            className={[ButtonCSS.Button, ButtonCSS[buttonType]].join(" ")}
            onClick={props.clicked}
            >
            {props.children}
        </button>
    );
}

export default button;