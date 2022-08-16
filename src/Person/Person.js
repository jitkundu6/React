import React from 'react';
import './Person.css'
import styled from 'styled-components';

const StyledDiv = styled.div`   
    width: 50%;
    margin: 15px auto;
    border: 0 2px 3px #000;
    box-shadow: 0 5px 10px #ccc;
    padding: 16px;
    text-align: center;
    
    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = function(props) {
    let personStyle = {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    }
    return (
        // <div className='Person' style={personStyle}>
        <StyledDiv>
            <p> I'm {props.name}, my age is {props.age} </p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            <div onClick={props.click}>
                {props.children}
            </div>
        </StyledDiv>
        // </div>
    );
};

export default person;