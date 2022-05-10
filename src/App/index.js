import React from "react";
import { AppUI } from "./AppUI.js";

function useLocalStorage (itemName,initialValue) {
  const [loading,setLoading] = React.useState(true)

  const [item,setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {

      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
    
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify([]));
        parsedItem = [];
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
    },1500)
  });

  
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  
  return{
    item,
    saveItem,
    loading,
  }

  // return[
  //   item,
  //   saveItem
  // ];
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
  } = useLocalStorage('TODOS_V1',[]);

  // const [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);  
  
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
  
  // console.log('Prev Render')
  // React.useEffect(() => {
  //   console.log('use effect')
  // },[totalTodos])
  // console.log('Post Render')

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
    loading = {loading}
    />
  );
}

export default App;