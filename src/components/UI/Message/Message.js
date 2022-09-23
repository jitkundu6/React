import React from "react";
import MessageCSS from "./Message.module.css";

const MESSAGE_SUCCESS = "Success";
const MESSAGE_WARNING = "Warning";
const MESSAGE_FAIL = "Fail";

const message = (props) => {
    let message_type = props.message_type;
    if(message_type !== MESSAGE_SUCCESS && message_type !== MESSAGE_WARNING && message_type !== MESSAGE_FAIL)
        message_type = MESSAGE_SUCCESS;

    let body =  <div className={MessageCSS.Textbox}>
                    <p className={MessageCSS[message_type]}> {props.message} &nbsp;&nbsp; </p>
                    <div className={MessageCSS.Close_Button} onClick={props.onClose}> <strong> x </strong></div>
                </div>;
    
    return(body);
}

export default message;
export {MESSAGE_SUCCESS, MESSAGE_WARNING, MESSAGE_FAIL};