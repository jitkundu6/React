import React, { Fragment } from "react";

import SideDrawerCSS from "./SideDrawer.module.css"; 
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
    // ...
    let attachedClasses = [SideDrawerCSS.SideDrawer, SideDrawerCSS.Close];
    if (props.open){
        attachedClasses = [SideDrawerCSS.SideDrawer, SideDrawerCSS.Open];
    }
    attachedClasses = [SideDrawerCSS.SideDrawer, SideDrawerCSS.Open];
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <div className={SideDrawerCSS.Logo}>
                    
                </div>
                <nav>
                </nav>
            </div>
        </Fragment>
    );
}

export default sideDrawer;