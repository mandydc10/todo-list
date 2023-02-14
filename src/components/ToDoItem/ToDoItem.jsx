import React from "react";

//CSS
import "./ToDoItem.css"

// alternative way -> function ToDoItem({todo})

function ToDoItem(props) {
    const { todo, completeToDo, incompleteToDo, removeToDo, index } = props; //destructing the props object

    return (<div className={`todo ${todo.isComplete ? "complete" : ""}`}>
        {todo.text}
        <div className="buttons">
            <button onClick={() => completeToDo(index)}>Complete</button>
            <button onClick={() => incompleteToDo(index)}>Not Complete</button>
            <button onClick={() => removeToDo(index)}>x</button>
        </div>
    </div>)
}

export default ToDoItem;