import React from "react";

const char = (props) => {
    const style ={
        display: 'inline-block',
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid green',
        padding: '5px',
        margin: '2px',
        textAlign: 'center',
    };
    return (
        <div style={style} onClick={props.click}>
            {props.char}                        
        </div>
    );
};

export default char;