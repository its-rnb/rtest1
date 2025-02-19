import { useState, useEffect, useRef } from 'react';

const SWatchMini= ()=> {

    const[count, setCount]= useState(0)
    const[active, setActive]= useState(false)
    const timer= useRef()

    useEffect(()=> {
        if(active){
            timer.current= setInterval(()=> {
                setCount(prev=> prev+1)
            },1000)
        }
        else clearInterval(timer.current)
        return ()=> clearInterval(timer.current)
    })

    const format= ()=>{
        return count%1000
    }

    return(
        <div>
            <h3>{format(count)}</h3>
            <button onClick={()=> setActive(true)}>Start</button>
            <button onClick={()=> setActive(false)}>Stop</button>
            <button onClick={()=> {setActive(false); setCount(0)}}>Reset</button>
        </div>
    )
}
export default SWatchMini