import React from "react";

//CSS
import "./ToDoItem.css"

// alternative way -> function ToDoItem({todo})

function ToDoItem(props) {
    const { todo, completeToDo, removeToDo, index } = props; //destructing the props object

    return (<div className={`todo ${todo.isComplete ? "complete" : ""}`}>
        {todo.text}
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>x</button>
    </div>)
}

export default ToDoItem;