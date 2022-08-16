import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = function(props) {
    let personStyle = {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    }
    return (
        <div className='Person' style={personStyle}>
            <p> I'm {props.name}, my age is {props.age} </p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            <div onClick={props.click}>
                {props.children}
            </div>
        </div>
    );
};

export default Radium(person);