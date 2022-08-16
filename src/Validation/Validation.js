import React from "react";

const validation = (props) => {
    let msg = 'Text is too short !!';
    if (props.userName.length > 5){
        msg = "Text is Long !!!";
    }
    return (
        <div>
            <p>{props.userName}</p>
            {/* {
                props.userName.length > 5 ?
                <p> Text is Long! </p> :
                <p> Text is too short! </p>
            } */}
            {msg}
        </div>
    );
};

export default validation;