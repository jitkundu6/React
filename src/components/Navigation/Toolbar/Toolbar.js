import React from "react";
import ToolbarCSS from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
    <header className={ToolbarCSS.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={ToolbarCSS.Logo}>
            <Logo />
        </div>
        <nav className={ToolbarCSS.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;