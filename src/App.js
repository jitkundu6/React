import React, { Component, Fragment } from 'react';
import AppCSS from './App.module.css';

import Layout from './components/Layout/Layout';
import View from './components/View/View';
import Create from './components/Create/Create';
import Home from './components/Home/Home';

import Modal from './components/UI/Modal/Modal';
import Login from './components/Login/Login';
import Button from './components/UI/Button/Button';

const ADMIN = {
    username: "Subhajit",
    email: "subhajit@propelinc.com",
    password: "12345678",
};

const ACTION_HOME = "Home";
const ACTION_CREATE = "Create";
const ACTION_EDIT = "Edit";
const ACTION_VIEW = "View";
const ACTION_DELETE = "Delete";
const ACTION_FORGOT_PASSWORD = "ForgotPassword";

class App extends Component {
  state = {
    person: [
      {
        id: 1,
        first_name: "Micky",
        last_name: "Micky",
        address: [
          {
            line1: "",
            line2: "",
            city: "Kolkata",
            state: "WB",
            country: "India",
            zip_code: "700123",
            type: "",
          },
        ],
        email_address: [
          {
            email: "",
            type: "",
          },
        ],
        phone_number: [
          {
            phone: "",
            type: "",
          },
        ],

      },
    ],

    action: ACTION_HOME,
    actionID: 0,
    active_page: 1,

    search: "",
    sort_by: {
      key: "first_name",
      direction: "asc"
    },
  };


  resetFilterHandler = () => {
    this.setState({
      search: "",
      sort_by: {
        key: "first_name",
        direction: "asc",
      },
    });
  }

  setActionHandler = (value) => {
    localStorage.setItem("action", value);
    this.resetFilterHandler();
  }

  onBackHandler = () => {
    this.setActionHandler(ACTION_HOME);
  }

  saveRecordHandler = (record) => {
    console.log("Creating/Editing record...");

    let records = JSON.parse(localStorage.getItem('records') || '[]');
    if(record.id === 0)
      record.id = records.length + 1;
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));

    localStorage.setItem("login_msg", "Record is successfully saved !!");
    localStorage.setItem("login_msg_type", "success");
    localStorage.setItem("action", ACTION_HOME);
    this.resetFilterHandler();
  }

  deleteRecordHandler = (id) => {
    if (id === 0) {
      this.deleteAllRecordHandler();
      return;
    }
    let records = JSON.parse(localStorage.getItem('records') || '[]')
    .filter(p => (p.id !== id));
    localStorage.setItem('records', JSON.stringify(records));

    this.setActionHandler(ACTION_HOME);
    localStorage.setItem("login_msg", "Record has been deleted !!");
    localStorage.setItem("login_msg_type", "warning");
    alert("Record deleted.");
  }

  deleteAllRecordHandler = () => {
    localStorage.setItem('records', '[]');
    this.setActionHandler(ACTION_HOME);
    localStorage.setItem("login_msg", "All records have been deleted !!");
    localStorage.setItem("login_msg_type", "warning");
    alert("All records deleted.");
  }
  
  initModifyRecordHandler = (id) => {
    console.log("Modifying record...");
    this.setState({
      actionID: id,
    });
    this.setActionHandler(ACTION_EDIT);
  }
  
  initDeleteRecordHandler = (id) => {
    console.log("Deleting record...");
    this.setState({
      actionID: id,
    });
    this.setActionHandler(ACTION_DELETE);
  }

  loginHandler = (value, forgotPassword) => {
    if(forgotPassword) {
      localStorage.setItem("action", ACTION_HOME);
      localStorage.setItem("login_msg", "Please check your email and follow the instructions to reset your password.");
      localStorage.setItem("login_msg_type", "success");
    }
    else {
      console.log("Login! ", value);
      let login = JSON.parse(sessionStorage.getItem('login') || 'false');
      if(login) {
        alert("User already Logged In !!");
      }
      else if(value.email === ADMIN.email && value.password === ADMIN.password){
        sessionStorage.setItem("login", "true");
        localStorage.setItem("login_msg", "Successfully Logged In !!");
        localStorage.setItem("login_msg_type", "success");
        localStorage.setItem("action", ACTION_HOME);
      }
      else{
        alert("Invalid Credentials, Please try again!");
        localStorage.setItem("login_msg", "Invalid Credentials, Please try again!");
        localStorage.setItem("login_msg_type", "fail");
      }
    }
  }

  logoutHandler = () => {
      sessionStorage.setItem("login", "false");
      this.resetFilterHandler();
      alert("Successfully Logged Out !!");
      localStorage.setItem("login_msg", "Successfully Logged Out !!");
      localStorage.setItem("login_msg_type", "success");
      localStorage.setItem("action", ACTION_HOME);
  }

  activePageHandler = (value) => {
    console.log("Active Page: " + value);
    this.setState({
      active_page: value,
    });
  }

  render() {
    console.log(this.state);

    let login = JSON.parse(sessionStorage.getItem('login') || 'false');
    let action = localStorage.getItem('action');

    let message = localStorage.getItem('login_msg');
    let message_type = localStorage.getItem('login_msg_type');
    localStorage.removeItem('login_msg');

    if(message) {
        message = <div className={AppCSS.Textbox}>
                      <p className={AppCSS[message_type]}> {message} &nbsp;&nbsp; </p>
                      <div className={AppCSS.Close_Button} onClick={this.resetFilterHandler}> <strong> x </strong></div>
                  </div>;
    }


    let body = <Login 
                  forgotPassword={false}
                  onSubmit={this.loginHandler} 
                  onBack={this.onBackHandler}
                  onForgot={() => this.setActionHandler(ACTION_FORGOT_PASSWORD)}
                >
                  {message}
                </Login>;

    if(login) {
      let persons = null;
      let modal = null;
      let active_layout = ACTION_HOME;
      let layout_body = <Home onDeleteAll={() => this.initDeleteRecordHandler(0)}/>;

      if (action === ACTION_DELETE)
      {
        let warning_msg = "Are you sure you want to delete the address book?";
        if (this.state.actionID === 0)
          warning_msg = "Are you sure you want to delete all the address book records?";
        
        modal = <Modal show={true} modalClosed={this.onBackHandler}>
                  <div className={AppCSS['App-intro']}>
                    <p> <strong> {warning_msg} </strong> </p>
                    <Button btn_type="Danger" clicked={() => this.deleteRecordHandler(this.state.actionID)} > Delete </Button>
                    <Button btn_type="Warning" clicked={this.onBackHandler} > Cancel </Button>
                  </div>
                </Modal>;
      }
      else if (action === ACTION_CREATE)
      {
        active_layout = ACTION_CREATE;
        layout_body = <Create onSubmit={this.saveRecordHandler} onBack={this.onBackHandler} />;
      }
      else if (action === ACTION_EDIT)
      {
        active_layout = ACTION_EDIT;
        layout_body = <Create editID={this.state.editID} onSubmit={this.saveRecordHandler} onBack={this.onBackHandler} />;
      }
      else if (action === ACTION_VIEW)
      {
        active_layout = ACTION_VIEW;
        layout_body = <View />;
      }

      body = <Layout
                username={ADMIN.username}
                active_layout={active_layout}
                actionID={this.state.actionID}
                onCreate={() => this.setActionHandler(ACTION_CREATE)}
                onHome={() => this.setActionHandler(ACTION_HOME)}
                onSignOut={this.logoutHandler}
              >
                <div>
                  {modal}
                  {message}
                  {layout_body}
                </div>
            </Layout>;
    }
    else if(action === ACTION_FORGOT_PASSWORD) {
      body = <Login 
                  forgotPassword={true}
                  onSubmit={this.loginHandler} 
                  onBack={this.onBackHandler}
              ></Login>;
    }
  
    return (
        <div className={AppCSS.App}>
          {body}
        </div>
    );
  }
}

export default App;
