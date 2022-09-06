import React, { Component, Fragment } from 'react';
import AppCSS from './App.module.css';

import Person from './components/Person/Person';
import Toolbar from './components/Toolbar/Toolbar';
import Input from './components/Input/Input';

class App extends Component {
  state = {
    person: [
      {
        id: 1,
        first_name: "Micky",
        last_name: "Micky",
        gender: 5,
        state: "WB",
        city: "Kolkata",
        start_date: "",
        end_date: "",
        ce: "",
        cn: "",
        cs: "",
      },
    ],

    modify_record: true,
    editID: 0,
    active_page: 1,
    list_view: false,

    filter: {
      first_name: "Micky",
      last_name: "Micky",
      gender: 5,
      state: "WB",
      city: "Kolkata",
      crr: "",
    },
  };

  modifyRecordHandler = (modify, editID) => {
    console.log("Creating/Editing new record...");
    this.setState({
      modify_record: modify,
      editID: editID,
    });
  }

  activePageHandler = (value) => {
    console.log("Active Page: " + value);
    this.setState({
      active_page: value,
    });
  }

  listViewHandler = (value) => {
    console.log("List View: " + value);
    this.setState({
      list_view: value,
    });
  }

  render() {
    console.log(this.state);
    let body = null
    let persons = null;

    if(!this.state.modify_record) {
      persons = (
        <div className={AppCSS.Layout}>
          <Person 
            name={this.state.person[0].first_name + ' ' + this.state.person[0].last_name}
            gender={this.state.person[0].gender}
            state="" 
            city=""
            crr={0} 
            image={""}
            onDelete={this.toggleHandler}
            onEdit={this.toggleHandler}
            />
        </div>
      );
      body = (
        <Fragment>
          <Toolbar drawerToggleClicked={this.toggleHandler}/>
          {persons}
          <footer className={AppCSS.Footer}>
            <button className={AppCSS.Button_Disabled} disabled={true}> First </button>
            <button className={AppCSS.Button_Disabled} disabled={true}> Prev </button>
            <button className={AppCSS.Button_Active} disabled={false}> 1 </button>
            <button className={AppCSS.Button} disabled={false}> 1 </button>
            <button className={AppCSS.Button} disabled={false}> 1 </button>
            <button className={AppCSS.Button} disabled={false}> Next </button>
            <button className={AppCSS.Button} disabled={false}> Last </button>
          </footer>
        </Fragment>
      );
    }
    else {
      body = (
        <Input/>
      );
    }
  
    return (
        <div className={AppCSS.App}>
          <h1 className={AppCSS["App-intro"]}> 👤 Sales Person </h1>
          {body}         
        </div>
    );
  }
}

export default App;
