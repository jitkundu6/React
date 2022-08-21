import React from "react";
import ToolbarCSS from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const toolbar = () => (
    <header className={ToolbarCSS.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;