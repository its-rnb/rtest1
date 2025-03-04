import { useState } from "react"
import '../styles/ToDoList.css'

function ToDoList(){

    const [item, setItem]= useState([{task: "Task 1", status: true}, {task: "Task 2", status: false}]);
    const [newItem, setNewItem]= useState('');

    const handleIp= (e)=> {
        setNewItem(e.target.value)
    }

    const addItem= ()=> {
        if(newItem.trim() !== ""){
            //update using updater func by using prev state of item "item" rep by "it"
            setItem(it => [...it, { task: newItem, status: false }]);
            setNewItem("");
        }
    }

    const delItem= (idx)=> {
        const updItem= item.filter((_, i)=> i !== idx);
        setItem(updItem);
    }

    const moveItemUp= (idx)=> {
        if(idx>0){
            const updItem= [...item];
            [updItem[idx], updItem[idx-1]]= [updItem[idx-1], updItem[idx]]
            setItem(updItem)
        }
    }

    const moveItemDown= (idx)=> {
        if(idx<item.length-1){
            const updItem= [...item];
            [updItem[idx], updItem[idx+1]]= [updItem[idx+1], updItem[idx]]
            setItem(updItem)
        }
    }

    const toggleStatus = (idx) => {
        //true-> done(completed)
        const updatedItems = [...item];
        updatedItems[idx].status = !updatedItems[idx].status;
        setItem(updatedItems);
    };
    
    return (
        <div className="toDoList-main">
            
            <h1>To-Do List</h1>
            <div>
                <input type="text" placeholder="Enter task" value={newItem} onChange={handleIp}/>
                <button className="add-btn" onClick={addItem}>Add</button>
            </div>

            <ul>
                {item.map((it, idx)=>
                <li key={idx}>
                    <span className="text" style={{textDecoration: it.status ? "line-through" : ""}}>{it.task}</span>
                    <button className="cmp-btn" onClick={()=> toggleStatus(idx)}>{it.status ? "Undone" : "Done"}</button>
                    <button className="del-btn" onClick={()=> delItem(idx)}>Delete</button>
                    <button className="move-btn" onClick={()=> moveItemUp(idx)}>⬆</button>
                    <button className="move-btn" onClick={()=> moveItemDown(idx)}>⬇</button>
                </li>)}
            </ul>

        </div>
    )
}
export default ToDoList