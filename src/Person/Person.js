import React from 'react';
import './Person.css'

const person = function(props) {
    return (
        <div className='Person'>
            <p> I'm {props.name}, my age is {props.age} </p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            <div onClick={props.click}>
                {props.children}
            </div>
        </div>
    );
};

export default person;