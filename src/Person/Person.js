import React from 'react';

const person = function(props) {
    return (
        <div>
            <p>I'm {props.name}, my age is {props.age} </p>
            <div>
                {props.children}
            </div>
        </div>
    )
};

export default person;