import React, { Fragment} from "react";
import Aux from '../../hoc/Aux';
import LayoutCSS from './Layout.module.css';

const layout = (props) => {
    return (
        <Fragment>
            <div>
                Toolbar,
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