import React from "react";
import './CreatedTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    }

    return(
        <button className="CreateTodoButton" onClick={()=>onClickButton('Aqui deberia ir un modal')}>+</button>
    );
}

export {CreateTodoButton}