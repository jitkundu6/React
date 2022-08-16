import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userName: ''
  };


  nameChangedHandler = (event) => {
    console.log("Name changed!");
    this.setState({
        userName: event.target.value,
      });
  }

  deleteCharHandler = (index) => {
    console.log("Delete char!");

    const charList = this.state.userName.split('')
    charList.splice(index,1);
    const updatedText = charList.join('');
    
    this.setState({
        userName: updatedText,
      });
  }

  render() {
    console.log(this.state);

    const charList = this.state.userName.split('').map((ch, index) => {
      return (
        <Char char={ch} key={index} click={this.deleteCharHandler.bind(this, index)}/>
      );
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h1> My 4th React app with User Input / Output + if condition:-) </h1>

        <input type="text" value={this.state.userName} onChange={this.nameChangedHandler}/>
        <Validation userName={this.state.userName}/>
        {charList}
	<p>Click the box to delete char.</p>
      </div>
    );
  }

}

export default App;
