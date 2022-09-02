import React from "react";
import TodoListCSS from "./TodoList.module.css";

import Card from "../Card/Card";

const todoList = (props) => {

    let tasks = props.tasks.map(task => {
        return(<Card key={task.id} onEdit={() => props.onEdit(task.id)} onDelete={() => props.onDelete(task.id)} task={task}/>)
    })
    return (
        <div className={TodoListCSS.Box}>
            <h3 className={TodoListCSS.Heading}> {props.title} </h3>
            {tasks}
            <p className={TodoListCSS.Add_task} onClick={() => props.onCreate(props.title)}>
                + Add another task 
            </p>

        </div>
    );
};

export default todoList;