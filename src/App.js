import React, { Component, Fragment } from 'react';
import './App.css';

import Form from './components/Form/Form';
import ImageList from './imageList.json';
import LoginForm from './components/LoginForm/LoginForm';

class App extends Component {
  state = {
    username: 'sk',
    password: '1234',

    country: 'all',
    state: 'all',
    city: 'all',
  };

  loginHandler = (value) => {
    console.log("Login! ", value);
    if(this.state.login) {
      alert("User already Logged In !!");
    }
    else if(value.username === this.state.username && value.password === this.state.password){
      sessionStorage.setItem("login", "true");
      alert("Successfully Logged In !!");
    }
    else{
      alert("Invalid Credentials, Please try again!");
    }
  }

  logoutHandler = () => {
      sessionStorage.setItem("login", "false");
      this.resetHandler();
      alert("Successfully Logged Out !!");
  }

  resetHandler = () => {
    this.setState({
      country: 'all',
      state: 'all',
      city: 'all',
    });
  }

  countryHandler = (event) => {
    console.log("Country changed!");
    console.log(this.state);
    this.setState({
        country: event.target.value,
        state: 'all',
        city: 'all',
    });
  }

  stateHandler = (event) => {
      console.log("State changed!");
      console.log(this.state);
      this.setState({
          state: event.target.value,
          city: 'all',
      });
  }

  cityHandler = (event) => {
      console.log("City changed!");
      console.log(this.state);
      this.setState({
          city: event.target.value,
      });
  }


  render() {
    console.log(this.state);

    let images = ImageList.map((img) => {
      if (img && (this.state.country==="all" ||  this.state.country===img.country))
        return (img);
    })
    .map((img) => {
      if(img && (this.state.state==="all" ||  this.state.state===img.state))
        return (img);
    })
    .map((img) => {
      if(img && (this.state.city==="all" ||  this.state.city===img.city))
        return (img);
    })
    .map((img, index) => {
      if(img)
        return (
            <img key={index} src={img.image} alt="" className='Image'/>
        );
    });

    const loggedIn = JSON.parse(sessionStorage.getItem('login'));
    let body = (<LoginForm onSubmit={this.loginHandler} title="Image Gallery"/>);
    if(loggedIn) {
        body = (
          <Fragment>
            <Form 
              state={this.state}
              onReset={this.resetHandler}
              onLogout={this.logoutHandler}
              countryHandler={this.countryHandler}
              stateHandler={this.stateHandler}
              cityHandler={this.cityHandler}
            />
            {images}
          </Fragment>
        );
    }

    return (
      <div className="App">
        {body}
      </div>
    );
  }

}

export default App;
