import React, { Fragment} from "react";
import Aux from '../../hoc/Auxiliary';
import LayoutCSS from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => {
    return (
        <Fragment>
            <div>
                <Toolbar />
                <SideDrawer />
                Backdrop
            </div>
            <main className={LayoutCSS.Content}>
                {props.children}
            </main>
        </Fragment>
    );
}

export default layout;