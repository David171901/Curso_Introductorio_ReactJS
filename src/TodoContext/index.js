import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props){

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


    return(
        <TodoContext.Provider value={{
            completedTodos, 
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodos,
            loading,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider}