//npm install --save redux react-redux
//npm install @reduxjs/toolkit
import React from "react";
import {createStore} from 'redux'
import { useSelector, useDispatch} from "react-redux"

function reducer(count=0, action){
    switch(action.type) {
        case 'Increment': return count+1;
        case 'Decrement': return count-1;
        case 'Reset': return count=0;
        default: return count
    }
}

const incr= ()=> {return {type:'Increment'}}
const decr= ()=> {return {type:'Decrement'}}
const reset= ()=> {return {type:'Reset'}}

const store= createStore(reducer)
store.subscribe(()=> console.log(store))

const RdxTest= (props)=> {

    const count= useSelector(state=> state)
    const dispatch= useDispatch()

    return(
        <div>
            <h1>Basic counter app using React Redux</h1>
            <h3>{count}</h3>
            <button onClick={()=> dispatch(incr())}>Increment</button>
            <button onClick={()=> dispatch(decr())}>Decrement</button>
            <button onClick={()=> dispatch(reset())}>Reset</button>
        </div>
    )
}

export default RdxTest