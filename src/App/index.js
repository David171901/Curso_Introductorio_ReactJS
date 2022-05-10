import React from "react";
import { AppUI } from "./AppUI.js";



function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos,setTodos] = React.useState(parsedTodos);
  
  const [searchValue,setSearchValue] = React.useState('');

  const [openModal,setOpenModal] = React.useState(false)
  
  const completedTodos = todos.filter(e => !!e.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length>=1){
    searchedTodos = todos;
  }
  else{
    searchedTodos = todos.filter(e =>{
      const todoText = e.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed:false,
      text:text
    });
    saveTodos(newTodos);
  }

  return (
    <AppUI
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    openModal={openModal}
    setOpenModal={setOpenModal}
    addTodos={addTodos}
    />
  );
}

export default App;