import React from "react";
import TodoListCSS from "./TodoList.module.css";

import Card from "../Card/Card";

const todoList = (props) => {

    const draggingOver = (e) => {
        e.preventDefault();
        console.log("Dragging Over " + e);
    }

    const dragDropped = (e, status) => {
        e.preventDefault();
        let taskID = e.dataTransfer.getData("taskID");
        console.log("Drag Dropped" + taskID + status);
    
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.map((task) => {
            if(String(task.id) === String(taskID)) {
                task.status = status;
            }
            return (task);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        props.refresh();
    }
    

    let tasks = props.tasks.map(task => {
        return(<Card key={task.id} onEdit={() => props.onEdit(task.id)} onDelete={() => props.onDelete(task.id)} task={task}/>)
    })
    return (
        <div className={TodoListCSS.Box}
            droppable
            onDragOver={(e) => draggingOver(e)}
            onDrop={(e) => dragDropped(e, props.title)}
            >

            <h3 className={TodoListCSS.Heading}> {props.title} </h3>
            {tasks}
            <br></br>
            <p className={TodoListCSS.Add_task} onClick={() => props.onCreate(props.title)}>
                + Add another task 
            </p>

        </div>
    );
};

export default todoList;