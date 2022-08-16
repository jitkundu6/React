import React, {Component} from "react";
import "./LoginForm.css";
import logo from '../../logo.svg';

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
    };

    usernameHandler = (event) => {
        console.log("Username changed!");
        this.setState({
            username: event.target.value,
        });
    }

    passwordHandler = (event) => {
        console.log("Password changed!");
        this.setState({
            password: event.target.value,
        });
    }

    render() {
        console.log("props: ", this.props)
        return (
            <div className='Form'>
                <form onSubmit={() => this.props.onSubmit(this.state)}>
                    <img src={logo} className="Form_logo" alt="logo"/>           
                    <header className="Form_header">
                        <h2> LOGO !!!</h2>
                    </header>
                    <div>
                        <span> USERNAME </span>
                        <input className="Form_input" type='text' placeholder="USERNAME" value={this.state.username} onChange={this.usernameHandler}/>
                    </div>
                    <div>
                        <span> PASSWORD </span>
                        <input className="Form_input" type='password' placeholder="PASSWORD" value={this.state.password} onChange={this.passwordHandler}/>
                    </div>

                    <div>
                        <button className="Login_button" type="submit"> LOG IN </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;