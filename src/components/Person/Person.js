import React from 'react';
import PersonCSS from './Person.module.css'

const person = function(props) {
    return (
        <div className={PersonCSS.Box}>
            <div className={PersonCSS.Person_heading}>
                <div className={PersonCSS.Heading}> {props.name} </div>
                <div className={PersonCSS.Close_btn} onClick={props.onDelete}> x </div>
            </div>
            <div className={PersonCSS.Person} onClick={props.onEdit}>
                <img className={PersonCSS.Image} src={props.image} alt={props.gender}></img>
                <div className={PersonCSS.Box2}>
                    <div className={PersonCSS.Location}>
                        <br/>
                        State: <strong>{props.state}</strong>, <br/>
                        City: <strong>{props.city}</strong> <br/>
                        <div className={PersonCSS.Green}> {props.crr}  </div>
                        <div className={PersonCSS.Black}> CRR </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default person;