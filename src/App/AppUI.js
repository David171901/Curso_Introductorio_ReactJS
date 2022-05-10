import React from "react";
import { TodoItem } from "../TodoItem/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoList } from "../TodoList/index.js";
import { CreateTodoButton } from "../CreatedTodoButton/index.js";
import { TodoSearch } from "../TodoSearch/index.js"
import { TodoTitle } from "../TodoTitle/index.js";
import { Modal } from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";

function AppUI({
        loading,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
        addTodos
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
                {loading && <p>Cargando ... </p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
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
            {!!openModal && (
                <Modal>
                    <TodoForm 
                    addTodos={addTodos}
                    setOpenModal={setOpenModal}>
                    </TodoForm>
                </Modal>
            )}

            <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}/>
        </React.Fragment>
    );
}

export {AppUI}