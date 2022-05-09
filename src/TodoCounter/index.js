import React from "react";
import './TodoCounter.css'

function TodoCounter(props){
    return(
        <h2 className="TodoCounter">Has completado {props.completedTodos} de {props.totalTodos} TODOs</h2>
    )
}

export {TodoCounter}