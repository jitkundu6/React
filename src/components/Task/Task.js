import React, { Component, Fragment } from "react";
import Button from "../Button/Button";

class Task extends Component {
    state = {
        id: 0,
        name: '',
        description: '',
        start_date: '',
        due_date: '',
        status: '',
    };

    nameHandler = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    descriptionHandler = (event) => {
        this.setState({
            description: event.target.value,
        });
    }
    startDateHandler = (event) => {
        this.setState({
            start_date: event.target.value,
        });
    }
    dueDateHandler = (event) => {
        this.setState({
            due_date: event.target.value,
        });
    }
    statusHandler = (event) => {
        this.setState({
            status: event.target.value,
        });
    }

    render() {
        let taskDetails = this.state;
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
            .filter(task => (task.id === this.props.taskID));

        if(this.props.taskID && tasks.length > 0 && this.state.id === 0) {
            taskDetails = tasks[0];
            this.setState({
                id: taskDetails.id ? taskDetails.id : 0,
                name: taskDetails.name,
                description: taskDetails.description,
                start_date: taskDetails.start_date,
                due_date: taskDetails.due_date,
                status: taskDetails.status,
            });
        }
        if(this.props.status && this.state.status === "") {
            taskDetails.status = this.props.status;
            this.setState({
                status: taskDetails.status,
            });
        }
        
        return (
            <Fragment>
                <h3> {this.props.title} </h3>

                <form onSubmit={() => this.props.onSubmit(this.state)} style={{
                    textAlign: 'left',
                    marginLeft: '70px',
                }}>
                    <div>
                        <span> <strong>*</strong>Task Name : </span>
                        <input className="Form_input" type='text' placeholder="Name" defaultValue={taskDetails.name} onChange={this.nameHandler} required/>
                    </div>
                    <div>
                        <span> Description : </span>
                        <textarea className="Form_input" type='text' placeholder="Description" value={taskDetails.description} onChange={this.descriptionHandler}/>
                    </div>
                    <div>
                        <span> Start Date : </span>
                        <input className="Form_input" type='date' placeholder="Start Date" value={taskDetails.start_date} onChange={this.startDateHandler}/>
                    </div>
                    <div>
                        <span> <strong>*</strong>Due Date : </span>
                        <input className="Form_input" type='date' placeholder="dd-mm-yyyy" value={taskDetails.due_date} onChange={this.dueDateHandler} required/>
                        <br/>
                    </div>
                    <div>
                        <span> Status : </span>
                        <select nmae="country" onChange={this.statusHandler} value={taskDetails.status}>
                            <option>OPEN</option>
                            <option>IN PROGRESS</option>
                            <option>COMPLETED</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <p> <strong>*</strong> Please fill all the required fields </p>
                        <Button type="Danger" clicked={this.props.onCancel}>CANCEL</Button>
                        <Button type="submit" >SAVE</Button>
                    </div>
                </form>

            </Fragment>
        );
    }
}

export default Task;