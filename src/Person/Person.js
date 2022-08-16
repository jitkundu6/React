import React from 'react';
import PersonCSS from './Person.module.css'

const person = function(props) {
    // let personStyle = {
    //     '@media (min-width: 500px)': {
    //         width: '450px',
    //     }
    // }
    return (
        <div className={PersonCSS.Person}>
            <p> I'm {props.name}, my age is {props.age} </p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            <div onClick={props.click}>
                {props.children}
            </div>
        </div>
    );
};

export default person;