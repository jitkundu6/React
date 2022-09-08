import React from "react";
import ButtonCSS from "./Button.module.css";

const button = (props) => {

    let body =  <button
                    form={props.form}
                    name={props.name}
                    type={props.type}
                    className={[ButtonCSS.Button, ButtonCSS[props.btn_type]].join(" ")}
                    onClick={props.clicked}
                    >
                    {props.children}
                </button>;

    if (props.name === "label")
        body = <label
                    form={props.form}
                    name={props.name}
                    type={props.type}
                    className={[ButtonCSS.Button, ButtonCSS[props.btn_type]].join(" ")}
                    onClick={props.clicked}
                    >
                    {props.children}
                </label>;

    return (
        body
    );
}

export default button;