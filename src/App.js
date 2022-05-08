import React from "react";
// import './App.css';

// const todos = [
//   {text: 'Cortar cebolla', completed:false},
//   {text: 'Picar cebolla', completed:false},
//   {text: 'Lavar cebolla', completed:false},
//   {text: 'Freir cebolla', completed:false}
// ];

function App() {
  return (
    <React.Fragment>
      {/* <TodoCounter/> */}
      <h2>Has completadp 2 de 3 TODOs</h2>
      {/* <TodoSearch/> */}
      <input placeholder="Cebolla"/>
      {/* <TodoList>
        {todos.map(todo =>(
          <TodoItem/>
        ))}
      </TodoList> */}
      {/* <CreateTodoButton/> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
