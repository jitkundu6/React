import React from "react";
import ToolbarCSS from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => (
    <header className={ToolbarCSS.Toolbar}>
        <div>MENU</div>
        <div className={ToolbarCSS.Logo}>
            <Logo />
        </div>
        <nav className={ToolbarCSS.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;