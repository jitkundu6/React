import React, {Component, Fragment} from "react";
import ModalCSS from "./Modal.module.css";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show);
    }

    render() {
        let task = (<div></div>);

        if (this.props.show) {
            task = (
                <Fragment>
                    <div 
                        className={ModalCSS.Backdrop}
                        onClick={this.props.clicked}>
                    </div>
                    <div 
                        className={ModalCSS.Modal}
                        style={{
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }}
                        >
                        {this.props.children}
                    </div>
                </Fragment>
            );
        }

        return (
            <Fragment>
                {task}
            </Fragment>
        );
    }
}

export default Modal;