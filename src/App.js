import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm/LoginForm';

class App extends Component {
  state = {
    username: 'sk',
    password: '1234',
    login: false,
  };

  loginHandler = (value) => {
    console.log("Login! ", value);
    if(this.state.login) {
      alert("User already Logged In !!");
    }
    else if(value.username === this.state.username && value.password === this.state.password){
      this.setState({
        login: true,
      })
      alert("Successfully Logged In !!");
    }
    else{
      alert("Invalid Credentials, Please try again!");
    }
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <LoginForm onSubmit={this.loginHandler} />
      </div>
    );
  }

}

export default App;
