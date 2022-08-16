import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

const app = () => {
  const [personState, personSetState]  = useState({
    person: [
      {name: "Micky", age: 5},
      {name: "Mini", age: 4},
      {name: "Donal", age: 6},      
    ]
  });

  const [otherState, otherSetState]  = useState("This is some other state.");


  const  switchNameHandler = () => {
    console.log("Switch name clicked.");
    personSetState({
        person: [
          {name: "Micky Mouse", age: 7},
          {name: "Mini", age: 4},
          {name: "Donal", age: 9},      
        ],
      });
  }

  console.log(personState, otherState);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>

      <h1> My 2nd React app using React Hook :-) </h1>
      <button onClick={switchNameHandler}> Switch Name </button>
      <Person name={personState.person[0].name} age={personState.person[0].age} />
      <Person name={personState.person[1].name} age={personState.person[1].age}> <b> I'm verry funny! </b></Person>
      <Person name={personState.person[2].name} age={personState.person[2].age} />
    </div>
  );

}

export default app;
