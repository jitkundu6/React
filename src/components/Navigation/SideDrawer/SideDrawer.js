import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import SideDrawerCSS from "./SideDrawer.module.css"; 

const sideDrawer = (props) => {
    // ...
    return (
        <div className={SideDrawerCSS.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer;