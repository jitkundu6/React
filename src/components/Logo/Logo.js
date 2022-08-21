import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import LogoCSS from "./Logo.module.css";

const logo = (props) => (
    <div className={LogoCSS.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;