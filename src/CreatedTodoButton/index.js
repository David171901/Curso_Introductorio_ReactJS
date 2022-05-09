import React from "react";
import './CreatedTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
        if(!props.openModal){
            props.setOpenModal(true)
        }
        else{
            props.setOpenModal(false)
        }
    }

    return(
        <button className="CreateTodoButton" onClick={onClickButton}>+</button>
    );
}

export {CreateTodoButton}