import React, { Component, Fragment } from "react";
import LoginCSS from './Login.module.css';

import Button from "../UI/Button/Button";
import Heading from "../UI/Heading/Heading";

class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    onChangeHandler = (event, key) => {
        let obj = {};
        obj[key] = event.target.value;
        this.setState(obj);
    }

    render() {
        let details = this.state;
        let forgotPassword = this.props.forgotPassword;

        const resetHandler = () => {
            this.setState({
                email: "",
                password: "",
            });
            forgotPassword = false;
        };

        const onBackHandler = () => {
            resetHandler();
            this.props.onBack();
        };

        const onForgotHandler = () => {
            resetHandler();
            this.props.onForgot();
        };

        let body = <Fragment>
                <div className={LoginCSS.Form}>
                    <h4 className={LoginCSS.Heading}> Login to your account </h4>
                    {this.props.children}
                    
                    <form onSubmit={() => this.props.onSubmit(this.state, forgotPassword)} style={{
                        textAlign: 'left',
                    }}>
                        <div className={LoginCSS.Element}>
                            <input type='email' placeholder="Email" defaultValue={details.email} onChange={(e) => this.onChangeHandler(e, 'email')} required/>
                        </div>
                        <div className={LoginCSS.Element}>
                            <input className={LoginCSS.Input} type='password' placeholder="Password" defaultValue={details.password} onChange={(e) => this.onChangeHandler(e, 'password')} required/>
                        </div>

                        <div className={LoginCSS.Bottom}>
                            <Button btn_type="Primary" type="submit"> Sign In </Button>
                            <Button btn_type="Warning"  type="reset" clicked={resetHandler}> Reset </Button>
                        </div>
                    </form>
                </div>

                <p className={LoginCSS.AnchorText} onClick={onForgotHandler}> Forgot Password? </p>
            </Fragment>;

        if (forgotPassword) {
            body = <Fragment>
                <div className={LoginCSS.Form}>
                    <form method="get" id="form2" onSubmit={() => this.props.onSubmit(this.state, forgotPassword)} style={{
                        textAlign: 'left',
                    }}>
                        <h3 className={LoginCSS.Heading}> Forgot Password? </h3>
                        <p> Enter the email address associated to your account. </p>
                        <p> We will email you a link to reset your password. </p>
                        <div className={LoginCSS.Element}>
                            <input type='email' placeholder="Email" defaultValue={details.email} onChange={(e) => this.onChangeHandler(e, 'email')} required/>
                        </div>

                    </form>
                
                    <div className={LoginCSS.Bottom}>
                        <Button btn_type="Primary" type="submit" form="form2"> Send </Button>   
                        <Button btn_type="Warning" clicked={onBackHandler} > Back </Button>
                    </div>
                </div>
            </Fragment>;
        }
        
        return (
            <div className={LoginCSS.Body}>              
                <Heading />
                {body}
            </div>
        );
    }
}

export default Login;