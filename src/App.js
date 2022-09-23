import React, { Component, Fragment } from 'react';
import AppCSS from './App.module.css';

import Layout from './components/Layout/Layout';
import View from './components/View/View';
import Create from './components/Create/Create';
import Home from './components/Home/Home';

import Modal from './components/UI/Modal/Modal';
import Login from './components/Login/Login';
import Button from './components/UI/Button/Button';
import Message, {MESSAGE_SUCCESS, MESSAGE_WARNING, MESSAGE_FAIL} from './components/UI/Message/Message';

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
    sort_by: {
      key: "first_name",
      direction: "asc"
    },
  };

  sortingHandler = (value) => {
    this.setState({
      sort_by: {
        key: value.key,
        direction: value.direction,
      },
    });
  }

  resetFilterHandler = () => {
    this.setState({
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
    let last_id = 0;

    let records = JSON.parse(localStorage.getItem('records') || '[]')
                  .filter(p => {
                    if (last_id < p.id)
                      last_id = p.id;
                    return(p.id !== record.id);
                  });
    if(record.id === 0)
      record.id = last_id + 1;
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));

    localStorage.setItem("login_msg", "Record is successfully saved !!");
    localStorage.setItem("login_msg_type", MESSAGE_SUCCESS);
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
    localStorage.setItem("login_msg_type", MESSAGE_WARNING);
    alert("Record deleted.");
  }

  deleteAllRecordHandler = () => {
    localStorage.setItem('records', '[]');
    this.setActionHandler(ACTION_HOME);
    localStorage.setItem("login_msg", "All records have been deleted !!");
    localStorage.setItem("login_msg_type", MESSAGE_WARNING);
    alert("All records deleted.");
  }
  
  initActionRecordHandler = (id, action) => { // init Edit, Delete or View
    console.log(action + " record...");
    localStorage.setItem("action", action);
    localStorage.setItem("actionID", id);
    this.resetFilterHandler();
  }

  loginHandler = (value, forgotPassword) => {
    if(forgotPassword) {
      localStorage.setItem("action", ACTION_HOME);
      localStorage.setItem("login_msg", "Please check your email and follow the instructions to reset your password.");
      localStorage.setItem("login_msg_type", MESSAGE_SUCCESS);
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
        localStorage.setItem("login_msg_type", MESSAGE_SUCCESS);
        localStorage.setItem("action", ACTION_HOME);
      }
      else{
        alert("Invalid Credentials, Please try again!");
        localStorage.setItem("login_msg", "Invalid Credentials, Please try again!");
        localStorage.setItem("login_msg_type", MESSAGE_FAIL);
      }
    }
  }

  logoutHandler = () => {
      sessionStorage.setItem("login", "false");
      this.resetFilterHandler();
      alert("Successfully Logged Out !!");
      localStorage.setItem("login_msg", "Successfully Logged Out !!");
      localStorage.setItem("login_msg_type", MESSAGE_SUCCESS);
      localStorage.setItem("action", ACTION_HOME);
  }

  render() {
    console.log(this.state);
    let actionID = JSON.parse(localStorage.getItem('actionID') || '0');

    let login = JSON.parse(sessionStorage.getItem('login') || 'false');
    let action = localStorage.getItem('action');

    let message = localStorage.getItem('login_msg');
    let message_type = localStorage.getItem('login_msg_type');
    localStorage.removeItem('login_msg');

    if(message) {
        message = <Message message_type={message_type} message={message} onClose={this.resetFilterHandler} />;
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
      let modal = null;
      let active_layout = ACTION_HOME;
      let layout_body = <Home 
                          onDeleteAll={() => this.initActionRecordHandler(0, ACTION_DELETE)}
                          initAction={this.initActionRecordHandler}
                        />;

      let records = JSON.parse(localStorage.getItem('records') || '[]')
                        .filter(p => (p.id === actionID));

      if (action === ACTION_DELETE)
      {
        let warning_msg = "Are you sure you want to delete the address book record " + JSON.stringify(actionID) + " ?";
        if (actionID === 0)
          warning_msg = "Are you sure you want to delete all the address book records?";
        
        modal = <Modal show={true} modalClosed={this.onBackHandler}>
                  <div className={AppCSS['App-intro']}>
                    <p> <strong> {warning_msg} </strong> </p>
                    <Button btn_type="Danger" clicked={() => this.deleteRecordHandler(actionID)} > Delete </Button>
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
        layout_body = <Create editID={actionID} record={records[0]} onSubmit={this.saveRecordHandler} onBack={this.onBackHandler} />;
      }
      else if (action === ACTION_VIEW)
      {
        active_layout = ACTION_VIEW;
        layout_body = <View record={records[0]}/>;
      }

      body = <Layout
                username={ADMIN.username}
                active_layout={active_layout}
                actionID={actionID}
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
