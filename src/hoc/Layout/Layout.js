import React, { Fragment, Component} from "react";
import LayoutCSS from './Layout.module.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSlideDrawer: false,
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSlideDrawer: false});
    }

    SideDrawerToggledHandler = () => {
        this.setState( (prevState) => {
           return {showSlideDrawer: !prevState.showSlideDrawer}
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar 
                    drawerToggleClicked={this.SideDrawerToggledHandler}/>
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