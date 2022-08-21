import React from "react";
import ToolbarCSS from "./Toolbar.module.css";

const toolbar = () => (
    <header className={ToolbarCSS.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;