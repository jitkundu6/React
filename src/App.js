import React, { Component } from 'react';
import logo from './logo.svg';
import AppCSS from './App.module.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: "Micky", age: 5},
      {name: "Mini", age: 4},
      {name: "Donal", age: 6},      
    ],
    otherState: "This is some other state.",
    showPerson: true,
  };

  toggleHandler = () => {
    console.log("Toggle button clicked.");
    let showPerson = this.state.showPerson;
    this.setState({
      showPerson: !showPerson,
    });
  }

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

    // const btStyle = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '10px',
    //   cursor: 'pointer',
    //   color: 'white',
    //   ':hover': {
    //     backgroundColor: 'lightGreen',
    //     color: 'black',
    //   }
    // };
    let ButtonClasses = [AppCSS.Button]

    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <div>
          <Person 
            name={this.state.person[0].name}
            age={this.state.person[0].age}
            changed={this.nameChangedHandler}
          />
          <Person 
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this, 'Funny Micky')}>
              <button> I will make Micky funny! </button>
          </Person>
          <Person name={this.state.person[2].name} age={this.state.person[2].age} />
        </div>
      );
      // btStyle.backgroundColor = 'red';
      // btStyle['color'] = 'black';
      // btStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // };
      ButtonClasses.push(AppCSS.Red_button);
    }

    // let classes = ['green'];
    let classes = [AppCSS.green];

    if (this.state.person.length <= 1 || persons === null) {
      console.log(this.state.person.length);
      // classes = ['red', 'bold'];
      classes = [AppCSS.red, AppCSS.bold];
    }

    return (
        <div className={AppCSS.App}>
          <header className={AppCSS['App-header']}>
            <img src={logo} className={AppCSS["App-logo"]} alt="logo" />
            <h1 className={AppCSS["App-title"]}>Welcome to React</h1>
          </header>
          <p className={AppCSS["App-intro"]}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <h1> My 5th React app with User Input / Output + css module :-) </h1>
          <button 
            onClick={this.toggleHandler}
            className={ButtonClasses.join(' ')}>
              Toggle Persons
          </button>
          <p className={classes.join(' ')}>
            List of Persons:
          </p>
          {persons}
        </div>
    );
  }

}

export default App;
