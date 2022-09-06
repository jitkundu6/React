import React from 'react';
import PersonCSS from './Person.module.css'

const person = function(props) {
    return (
        <div className={PersonCSS.Box}>
            <div className={PersonCSS.Person_heading}>
                <div className={PersonCSS.Heading}> Name </div>
                <div className={PersonCSS.Close_btn}> x </div>  
            </div>
            <div className={PersonCSS.Person}>
                <img className={PersonCSS.Image} src='images/Male.png' alt="female"></img>
                <div className={PersonCSS.Box2}>
                    <p className={PersonCSS.Location}>
                        I'm {props.name}, <br></br>
                        my age is {props.age} <br></br>
                        <div className={PersonCSS.Green}> 7  </div>
                        <div className={PersonCSS.Black}> CRR </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default person;