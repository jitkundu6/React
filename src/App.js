import React, { Component } from 'react';
import AppCSS from './App.module.css';

import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    tasks: [

    ],
    editTaskID: 0,
    createTask: true,
  };

  showEditTaskHandler = (id) => {
    this.setState({
      editTaskID: id,
    });
  }

  closeEditTaskHandler = () => {
    this.setState({
      editTaskID: 0,
    });
  }

  render() {
    console.log(this.state);

    let show = false;
    let task = <p> HEllo </p>;

    if (this.state.createTask) {
      show = true;

    }
    else if (this.state.editTaskID > 0) {
      show = true;

    }

    return (
        <div className={AppCSS.App}>
          <h1 className={AppCSS['App-title']}> TODO LIST </h1>
          
          <Modal show={show} clicked={this.closeEditTaskHandler}> {task}</Modal>

          <div className={AppCSS['App-body']}>
            <TodoList title="OPEN"/>
            <TodoList title="IN PROGRESS"/>
            <TodoList title="COMPLETED"/>
          </div>
        </div>
    );
  }

}

export default App;
