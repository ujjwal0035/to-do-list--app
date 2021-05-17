import React from 'react'
// import './ToDoList'

const ToDoList =(props) =>{
    const deleteItem = () =>{
        console.log("ujju")
    }

    return (
        <div className="items-container">
            {/* <label className="cross">x</label> */}
            <li>
                <label className="cross" onClick={() =>props.onSelect(props.id)}>x</label>
                {props.name}
                </li>
            
        </div>
    
    )
}

export default ToDoList;