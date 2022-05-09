import React from "react";
import { TodoItem } from "../TodoItem/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoList } from "../TodoList/index.js";
import { CreateTodoButton } from "../CreatedTodoButton/index.js";
import { TodoSearch } from "../TodoSearch/index.js"
import { TodoTitle } from "../TodoTitle/index.js";

function AppUI({
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        deleteTodos,
    }){
    return(
        <React.Fragment>
            <TodoTitle/>
            <TodoCounter
            completedTodos = {completedTodos}
            totalTodos = {totalTodos}
            />
            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            <TodoList>
            {searchedTodos.map(todo =>(
                <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodos(todo.text)}
                onDelete={()=>deleteTodos(todo.text)}
                />
            ))}
            </TodoList>
            <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUI}