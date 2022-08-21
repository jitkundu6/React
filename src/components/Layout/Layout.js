import React, { Fragment} from "react";
import Aux from '../../hoc/Auxiliary';
import LayoutCSS from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => {
    return (
        <Fragment>
            <div>
                <Toolbar />,
                Sidedrawer,
                Backdrop
            </div>
            <main className={LayoutCSS.Content}>
                {props.children}
            </main>
        </Fragment>
    );
}

export default layout;