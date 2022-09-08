import React from "react";
import HeadingCSS from "./Heading.module.css"; 

const heading = (props) => {
    return (
        <div className={HeadingCSS.Head_Address_Book}>
            <img className={HeadingCSS.Image} src='images/address-book.png' alt="Address-book"></img>
            <h1>  Address Book </h1>
        </div>
    );
};

export default heading;