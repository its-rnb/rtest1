import {useState} from 'react'

const Counter= ()=> {

    const [count, setCount]= useState(0)

    return(
        <div className='counter-main'>
            <h2 className='counter-num'>{count}</h2>
            <button className='count-start' onClick={()=> setCount(count+1)}>Increment</button>
            <button className='count-stop' onClick={()=> setCount(count-1)} disabled={count===0}>Decrement</button>
            <button className='count-reset' onClick={()=> setCount(0)} disabled={count===0}>Reset</button>
        </div>
    )
}

export default Counter

//if count+1 set to count++, type error