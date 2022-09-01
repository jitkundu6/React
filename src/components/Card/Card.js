import React from "react";
import CardCSS from "./Card.module.css";

const card = (props) => {
    return (
        <div className={CardCSS.Card}>
            <h4 className={CardCSS.Heading}> IN PROGRESS </h4>
            <div className={CardCSS.Date_card}>
                <p> <strong> DUE ON: 12/12/2022 </strong> </p>
            </div>
            <button className={CardCSS.Close_btn} onClick={props}> X </button>
        </div>
    );
};

export default card;