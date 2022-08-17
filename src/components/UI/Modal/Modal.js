import React from "react";
import ModalCSS from "./Modal.module.css";

const modal = (props) => (
    <div className={ModalCSS.Modal}>
        {props.children}
    </div>
);

export default modal;