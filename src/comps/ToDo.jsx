import { useState, useEffect } from "react";

const ToDo= ()=> {

    const [item, setItem]= useState([])

    function addItem(){

        let str= document.getElementById('input-txt').value
        item.push(str)
        setItem(item)
        console.log(item)
    }

    useEffect(()=> {
    }, [item])

    return (
        <div>
            <h1>ToDo app</h1>
            <input id="input-txt" />
            <button onClick={addItem}>Add item</button>
            <button>Delete item</button>
            <ul>
                {item.map((itm, idx)=> {
                    return (<li key={idx}>{itm}</li>)
                })}
            </ul>
        </div>
    )
}
export default ToDo;