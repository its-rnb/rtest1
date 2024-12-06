import {useState} from 'react'

const Counter= ()=> {

    const[count, setCount]= useState(0)

    return(
        <div className="counter-main">
            <h2>Counter</h2>
            <h3>{count}</h3>
            <div className="btn-group">
                <button className='btn-start' onClick={()=> setCount(count+1)}>Increment</button>
                <button className='btn-stop' onClick={()=> setCount(count-1)} disabled={count===0}>Decrement</button>
                <button className='btn-reset' onClick={()=> setCount(0)} disabled={count===0}>Reset</button>
            </div>
        </div>
    )
}

export default Counter

//if count+1 set to count++, type error