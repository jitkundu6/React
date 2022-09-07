import React, { Component, Fragment } from 'react';
import AppCSS from './App.module.css';

import Person from './components/Person/Person';
import Toolbar from './components/Toolbar/Toolbar';
import Input from './components/Input/Input';

const PERSON_PER_PAGE = 8;

class App extends Component {
  state = {
    modify_record: false,
    editID: 0,
    active_page: 1,
    list_view: false,
    filter: {
      gender: "all",
      state: "all",
      city: "all",
      crr: "all",
      first_name: "all",
      last_name: "all",
    },
  };

  recordSaveHandler = (record) => {
    let records = JSON.parse(localStorage.getItem('records') || '[]')
      .filter(p => (p.id !== record.id));
    
    if(record.id === 0)
      record.id = records.length + 1;
    records.push(record);

    localStorage.setItem('records', JSON.stringify(records));
    this.modifyRecordHandler(false, 0);
    alert("Sales person's details saved.")
  }

  modifyRecordHandler = (modify, editID) => {
    console.log("Modifying record...");
    this.setState({
      modify_record: modify,
      editID: editID,
    });
  }

  activePageHandler = (value) => {
    if(value <= 0) {
      console.log("Invalid Page Number: " + value);
      return;
    }
    console.log("Active Page: " + value);
    this.setState({
      active_page: value,
    });
  }

  listViewHandler = (value) => {
    console.log("List View: " + value);
    if(value === this.state.list_view)
      return;
    this.setState({
      list_view: value,
    });
  }

  deleteRecordHandler = (id) => {
    let records = JSON.parse(localStorage.getItem('records') || '[]')
    .filter(p => (p.id !== id));
    localStorage.setItem('records', JSON.stringify(records));
    this.modifyRecordHandler(false, 0);
    alert("Sales person's record deleted.");
  }

  deleteAllRecordHandler = () => {
    localStorage.setItem('records', '[]');
    this.modifyRecordHandler(false, 0);
    alert("All Sales person's record deleted.");
  }

  resetFilterHandler = () => {
    this.setState({
      filter: {
        gender: "all",
        state: "all",
        city: "all",
        crr: "all",
        first_name: "all",
        last_name: "all",
      },
    });
  }

  filterHandler = (event, key) => {
    let filter = {...this.state.filter};
    filter[key] = event.target.value;
    this.setState({
      filter: filter,
    });
    this.modifyRecordHandler(false, 0);
  }
  
  render() {
    console.log(this.state);
    let body = null

    if(!this.state.modify_record) {
      let records = JSON.parse(localStorage.getItem('records') || '[]')
        .map(p => {
            p['crr'] = (((p.ce - p.cn)/ p.cs) * 100).toFixed(0);
            return(p);
        });

      let genderBasedRecords = records.filter(p => (p));
      let stateBasedRecords = genderBasedRecords.filter(p =>
        (this.state.filter.gender === "all" || (p && this.state.filter.gender === p.gender))
      );      
      let cityBasedRecords = stateBasedRecords.filter(p =>
        (this.state.filter.state === "all" || (p && this.state.filter.state === p.state))
      );
      let crrBasedRecords = cityBasedRecords.filter(p =>
        (this.state.filter.city === "all" || (p && this.state.filter.city === p.city))
      );
      let firstNameBasedRecords = crrBasedRecords.filter(p =>
        (this.state.filter.crr === "all" || (p && this.state.filter.crr === p.crr))
      );
      let lastNameBasedRecords = firstNameBasedRecords.filter(p =>
        (this.state.filter.first_name === "all" || (p && this.state.filter.first_name === p.first_name))
      );

      let filteredRecords = lastNameBasedRecords.filter(p => (p));
      let recordSet = {
        reords: records,
        genderBasedRecords: genderBasedRecords,
        stateBasedRecords: stateBasedRecords,
        cityBasedRecords: cityBasedRecords,
        crrBasedRecords: crrBasedRecords,
        firstNameBasedRecords: firstNameBasedRecords,
        lastNameBasedRecords: lastNameBasedRecords,
      }

      let total_page = Math.ceil(filteredRecords.length/PERSON_PER_PAGE);
      if(this.state.active_page > total_page && total_page > 0)
        this.setState({
          active_page: 1,
        });
      
      let pages = [];
      let disabledFirst = false;
      let disabledLast = false;
      let firstButtonClass = AppCSS.Button;
      let lastButtonClass = AppCSS.Button;

      if(this.state.active_page === 1) {
        disabledFirst = true;
        firstButtonClass = AppCSS.Button_Disabled;
      }
      if(this.state.active_page === total_page) {
        disabledLast = true;
        lastButtonClass = AppCSS.Button_Disabled;
      }

      for(let i=0; i < total_page; i++) {
        let buttonClass = AppCSS.Button;
        if(this.state.active_page === i+1) {
          buttonClass = AppCSS.Button_Active;
        }
        pages.push(
          <button
            key={i+1}
            className={buttonClass}
            onClick={() => this.activePageHandler(i+1)}
            disabled={false}> 
              {i+1} 
          </button>
        );
      }

      let persons = null;
      persons = filteredRecords.map((p, i) => {
        if(i < (this.state.active_page - 1)*PERSON_PER_PAGE || i >= (this.state.active_page)*PERSON_PER_PAGE)
          return <div key={p.id}> </div>;
        let image = "images/" + p.image;
        if(!p.image)
          image = "images/gender/" + p.gender + ".png";
        return (
            <Person 
              key={p.id}
              name={p.first_name + ' ' + p.last_name}
              gender={p.gender}
              state={p.state}
              city={p.city}
              crr={p.crr}
              image={image}
              onDelete={() => this.deleteRecordHandler(p.id)}
              onEdit={() => this.modifyRecordHandler(true, p.id)}
            />
        );
      });

      let appLayout = AppCSS.Layout;
      if(this.state.list_view)
        appLayout = AppCSS.ListLayout;
      body = (
        <Fragment>
          <Toolbar 
            addPersonClicked={() => this.modifyRecordHandler(true, 0)}
            list_view={this.state.list_view}
            onCardView={() => this.listViewHandler(false)}
            onListView={() => this.listViewHandler(true)}
            onDeleteAll={this.deleteAllRecordHandler}
            onResetFilter={this.resetFilterHandler}
            filter={this.state.filter}
            onFilter={this.filterHandler}
            recordSet={recordSet}
          />

          <div className={appLayout}>
            {persons}
          </div>

          <br/>
          <br/>
          <footer className={AppCSS.Footer}>
            <button 
              className={firstButtonClass}
              onClick={() => this.activePageHandler(1)}
              disabled={disabledFirst}>
                First </button>
            <button 
              className={firstButtonClass}
              onClick={() => this.activePageHandler(this.state.active_page - 1)}
              disabled={disabledFirst}>
                Prev </button>
            {pages}
            <button 
              className={lastButtonClass}
              onClick={() => this.activePageHandler(this.state.active_page + 1)} 
              disabled={disabledLast}>
                Next </button>
            <button 
              className={lastButtonClass}
              onClick={() => this.activePageHandler(total_page)}
              disabled={disabledLast}>
                Last </button>
          </footer>
        </Fragment>
      );
    }
    else {
      body = (
        <Input 
          onBack={() => this.modifyRecordHandler(false, 0)}
          editID={this.state.editID}
          onSubmit={this.recordSaveHandler}
          />
      );
    }
  
    return (
        <div className={AppCSS.App}>
          <h1 className={AppCSS["App-intro"]}> <span role="img" aria-label="emoji0">👤</span> Sales Person </h1>
          {body}         
        </div>
    );
  }
}

export default App;
