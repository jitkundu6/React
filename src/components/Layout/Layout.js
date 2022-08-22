import React, { Fragment, Component} from "react";
import Aux from '../../hoc/Auxiliary';
import LayoutCSS from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSlideDrawer: true,
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSlideDrawer: false});
    }

    render() {
        return (
            <Fragment>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSlideDrawer}
                    closed={this.SideDrawerClosedHandler}/>
                <main className={LayoutCSS.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;