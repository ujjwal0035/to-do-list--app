import React, { useState } from 'react';

import './App.css';

import ToDoList from './components/ToDoList'
// import './components/'

function App() {
  const [listItem, setListItem]=useState("");
  const [item,setItems] = useState([]);

  const itemEvent = (event) =>{
    setListItem(event.target.value);
  }


  const listOfItem= () =>{
    if(listItem !==""){
    setItems(oldlist =>{
      return [...oldlist,listItem];
    })}
    setListItem(() =>{
      return "";
    })
  }

  const deleteItem =(id)=>{
    console.log("deleted")

    setItems((oldlist) => {
      return oldlist.filter((arrEle,index) =>{
        return index !==id;
      })
    })
  }
  return (
    <div className="App">
      <div className="main-container">
        <h1>ToDo List</h1>
        <input type="text" placeholder="Add Items" value={listItem} onChange={itemEvent}/>
        <button onClick={listOfItem}>+</button>

        <ol>
          {/* <li>{listItem}</li> */}
          {
            item.map((listValue,index) =>{
             return  <ToDoList 
             name={listValue}
             key={index}
             id={index}
             onSelect={deleteItem}/>
            })
          }

        </ol>
      </div>
    </div>
  );
}

export default App;
