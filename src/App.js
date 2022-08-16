import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: "Micky", age: 5},
      {name: "Mini", age: 4},
      {name: "Donal", age: 6},      
    ],
    otherState: "This is some other state.",
  };


  switchNameHandler = (newName) => {
    console.log("Switch name clicked.");
    this.setState({
        person: [
          {name: newName, age: 7},
          {name: "Mini", age: 4},
          {name: "Donal", age: 9},      
        ],
      });
  }

  nameChangedHandler = (event) => {
    console.log("Switch name clicked.");
    this.setState({
        person: [
          {name: event.target.value, age: 7},
          {name: "Mini", age: 4},
          {name: "Donal", age: 9},      
        ],
      });
  }

  render() {
    console.log(this.state);

    const btStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h1> My 3rd React app with User Input / Output + css :-) </h1>
        <button 
          onClick={() => this.switchNameHandler("Micky Mouse!")}
          style={btStyle}>
            Switch-Name
        </button>
        <Person 
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          changed={this.nameChangedHandler}
          />
        <Person 
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'Funny Micky')}>
            <button> I will make Micky funny! </button></Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }

}

export default App;
