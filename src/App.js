import React from "react";
import { TodoItem } from "./TodoItem.js";
import { TodoCounter } from "./TodoCounter.js";
import { TodoList } from "./TodoList.js";
import { CreateTodoButton } from "./CreatedTodoButton.js";
import { TodoSearch } from "./TodoSearch.js"
import { TodoTitle } from "./TodoTitle.js";
// import './App.css';

const todos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'Picar cebolla', completed:false},
  {text: 'Lavar cebolla', completed:true},
  {text: 'Freir cebolla', completed:false}
];

function App() {
  return (
    <React.Fragment>
      <TodoTitle/>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.text}
          text={todo.text}
          completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
