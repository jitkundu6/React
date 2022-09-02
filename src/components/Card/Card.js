import React from "react";
import CardCSS from "./Card.module.css";

const card = (props) => {

    const dragStarted = (e, id) => {
        e.dataTransfer.setData("taskID", id);
        console.log("Drag started " + id);
    }

    const date = new Date(props.task.due_date)
    let cardClass = CardCSS.Date_card;
    if(date < new Date()) {
        cardClass = CardCSS.Expired_Date_card;
    }
    return (
        <div className={CardCSS.Card}>
            <div className={CardCSS.Card2} 
                onClick={props.onEdit} 
                draggable 
                onDragStart={(e) => dragStarted(e, props.task.id)}
                >
                <h4 className={CardCSS.Heading}> {props.task.name} </h4>
                <div className={cardClass}>
                    <p> <strong> DUE ON: {date.toLocaleDateString()} </strong> </p>
                </div>
            </div>
            <button className={CardCSS.Close_btn} onClick={props.onDelete}> X </button>
        </div>
    );
};

export default card;