import React from "react";
import './TodoForm.css'
 
function TodoForm(props){

    const [newTodoValue,setNewTodoValue] = React.useState('');
    
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    const onCancel = () =>{
        props.setOpenModal(false)
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        props.addTodos(newTodoValue)
        props.setOpenModal(false)
    };

    return(
        <form onSubmit={onSubmit} >
            <label className="title">Escribe tu nuevo TODO 📖</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick = {onCancel}
                >
                Cancelar
                </button>

                <button
                className="TodoForm-button TodoForm-button-add"
                type= "submit"
                >
                Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}