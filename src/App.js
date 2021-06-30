import React, { useState } from 'react';

import './App.css';
import { Button,Modal} from 'react-bootstrap';
import ToDoList from './components/ToDoList'
// import './components/'

function App() {
  const [listItem, setListItem]=useState("");
    const [item,setItems] = useState([]);
	const [edit,setEdit]=useState("");
	const [editId,setEditId]=useState('');
  const [showModel,setShowModel]=useState(false);

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
  const editItem=(id)=>{
    setEditId(()=>id);
    setShowModel(()=>!showModel);
  }
  const saveModel=()=>{
    setItems(oldlist=>{
      oldlist[editId]=edit;
      return oldlist;
    })
    setEdit(()=>"")
    setShowModel(()=>!showModel);
  }
  return (
    <div className="App">
      <div className="main-container">
        <h1>ToDo List</h1>
        <input id="task" type="text" placeholder="Add Items" value={listItem} onChange={itemEvent}/>
        <button id="btn" className="button" onClick={listOfItem}>+</button>

        <ol>
          
          {
            item.map((listValue,index) =>{
             return  <ToDoList 
             className="list"
             name={listValue}
             key={index}
             id={index}
             onSelect={deleteItem}
			 onSelectedit={editItem}/>
            })
          }

        </ol>
      </div>
      <Modal show={showModel} onHide={editItem}>  
      <Modal.Header>
        
        <Modal.Title>Edit Here</Modal.Title>
        
      </Modal.Header>
          <Modal.Body>
          <input className="editTask" type="text" placeholder="Edit Item" value={edit} onChange={(e)=>{if(e.target.value !=="") setEdit(e.target.value)}}/>
          <Button className="saveTask " onClick={saveModel} >+</Button>
          </Modal.Body>
          
          <Modal.Footer>   
            {/* <button onClick={editItem}>Save</button>   */}
          </Modal.Footer>  
        </Modal>
    </div>
  );
}

export default App;
