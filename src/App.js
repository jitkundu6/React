import React, { Component } from 'react';
import AppCSS from './App.module.css';

import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import Task from './components/Task/Task';

class App extends Component {
  state = {
    editTaskID: 0,
    createTask: false,
    newTaskStatus: "",
  };

  EditTaskHandler = (id) => {
    this.setState({
      editTaskID: id,
    });
  }

  CreateNewTaskHandler = (value) => {
    this.setState({
      createTask: true,
      newTaskStatus: value,
    });
  }

  closeTaskHandler = () => {
    this.setState({
      editTaskID: 0,
      createTask: false,
      newTaskStatus: "",
    });
  }

  saveNewTaskHandler = (value) => {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    let id = tasks.length + 1;
    let newTask = {
      id: id,
      name: value.name,
      description: value.description,
      start_date: value.start_date,
      due_date: value.due_date,
      status: value.status,
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(newTask);
  }

  saveEditedTaskHandler = (value) => {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    let editedTask = {
      id: value.id,
      name: value.name,
      description: value.description,
      start_date: value.start_date,
      due_date: value.due_date,
      status: value.status,
    };
    tasks = tasks.map(task => {
      if (task.id === value.id)
        return (editedTask);
      else
        return (task);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log("editedTask" + editedTask);
  }

  resetHandler = () => {
    localStorage.setItem('tasks', '[]');
    this.closeTaskHandler();
  }

  deleteTaskHandler = (id) => {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter(task => (task.id !== id));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.closeTaskHandler();
  }

  render() {
    console.log(this.state);

    let show = false;
    let task = <p></p>;
    let popup = <p></p>;

    if (this.state.createTask) {
      show = true;
      task = <Task 
        title="Create New Task"
        onCancel={this.closeTaskHandler} 
        onSubmit={this.saveNewTaskHandler}
        status={this.state.newTaskStatus}/>;
    }
    else if (this.state.editTaskID > 0) {
      show = true;
      task = <Task 
        title="Edit Task"
        onCancel={this.closeTaskHandler} 
        onSubmit={this.saveEditedTaskHandler}
        taskID={this.state.editTaskID}/>;
    }
    if (show)
      popup = <Modal show={show} clicked={this.closeTaskHandler}> {task}</Modal>;

    let allTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    let openTask = allTasks.filter(task => task.status==="OPEN");
    let inProgressTask = allTasks.filter(task => task.status==="IN PROGRESS");
    let completedTask = allTasks.filter(task => task.status==="COMPLETED");

    return (
        <div className={AppCSS.App}>
          <h1 className={AppCSS['App-title']}> TODO LIST </h1>
          <button className={AppCSS.Button} onClick={this.resetHandler}> RESET </button>
          {popup}

          <div className={AppCSS['App-body']}>
            <TodoList title="OPEN" onCreate={this.CreateNewTaskHandler} onEdit={this.EditTaskHandler} onDelete={this.deleteTaskHandler} tasks={openTask}/>
            <TodoList title="IN PROGRESS" onCreate={this.CreateNewTaskHandler} onEdit={this.EditTaskHandler} onDelete={this.deleteTaskHandler} tasks={inProgressTask}/>
            <TodoList title="COMPLETED" onCreate={this.CreateNewTaskHandler} onEdit={this.EditTaskHandler} onDelete={this.deleteTaskHandler} tasks={completedTask}/>
          </div>
        </div>
    );
  }

}

export default App;
