import React from "react";
import BuildControlCSS from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={BuildControlCSS.BuildControl}>
        <div className={BuildControlCSS.Label}>{props.label}</div>
        {/* {props.disabledLess ? null : <button className={BuildControlCSS.Less} onClick={props.removed}> Less (-) </button> } */}
        <button className={BuildControlCSS.Less} onClick={props.removed} disabled={props.disabledLess}> Less (-) </button>
        <button className={BuildControlCSS.More} onClick={props.added}> More (+) </button>
    </div>
);

export default buildControl;