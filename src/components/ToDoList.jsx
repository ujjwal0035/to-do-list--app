import React from 'react'
// import './ToDoList'

const ToDoList =(props) =>{
    const deleteItem = () =>{
        console.log("ujju")
    }

    return (
        <div className="items-container">
            <li>
                <label className="delete cross"  onClick={() =>props.onSelect(props.id)}>x</label>
                <label className="edit cross" onClick={() =>props.onSelectedit(props.id)}>edit</label>
                {props.name}
                </li>
        </div>
    
    )
}

export default ToDoList;