import React from "react";
import NavigationItemsCSS from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <ul className={NavigationItemsCSS.NavigationItems}>
        <NavigationItem link="/" active>
            Burger Builder
        </NavigationItem>
        <NavigationItem link="/">
            Checkout
        </NavigationItem>
    </ul>
);

export default navigationItems;