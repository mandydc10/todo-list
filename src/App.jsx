import React, { useState } from "react";

// Components
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import "./app.css"


function App() {
  //State
  const [todos, setTodos] = useState([
    { text: "Do this", isComplete: false },
    { text: "Do that", isComplete: false },
    { text: "Maybe something else", isComplete: false },
  ]);

  //Actions
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isComplete: false }];
    setTodos(newTodos);
  };

  const completeToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete == !newTodos[index].isComplete;
    setTodos(newTodos);
  }

  const incompleteToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = false;
    setTodos(newTodos);
  }

  const removeToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        <h1>ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            completeToDo={completeToDo}
            incompleteToDo={incompleteToDo}
            removeToDo={removeToDo} />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>);
}

export default App;