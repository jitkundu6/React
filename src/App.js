import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.show ? 'red' : 'green'};
  font: inherit;
  border: 1px solid blue;
  padding: 10px;
  cursor: pointer;
  color: ${props => props.show ? 'black' : 'white'};;
  &:hover {
    background-color: ${props => props.show ? 'salmon' : 'lightGreen'};
    color: black
  }
`;

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
    }

    let classes = ['green'];

    if (this.state.person.length <= 1 || persons === null) {
      console.log(this.state.person.length);
      classes = ['red', 'bold'];
    }

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
          <StyledButton 
            show={this.state.showPerson}
            onClick={this.toggleHandler}>
              Toggle Persons
          </StyledButton>
          <p className={classes.join(' ')}>
            List of Persons:
          </p>
          {persons}
        </div>
    );
  }

}

export default App;
