import React from "react";
import TodoListCSS from "./TodoList.module.css";

import Card from "../Card/Card";

const todoList = (props) => {
    return (
        <div className={TodoListCSS.Box}>
            <h3 className={TodoListCSS.Heading}> {props.title} </h3>
            <Card />
            <Card />
            <Card />
            <p className={TodoListCSS.Add_task}> + Add another task </p>

        </div>
    );
};

export default todoList;