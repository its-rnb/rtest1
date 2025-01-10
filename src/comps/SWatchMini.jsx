import { useState, useEffect, useRef } from "react"

function SWatchMini(){

    const [count, setCount]= useState(0)
    const [active, setActive]= useState(0)
    const timer= useRef()

    const format= ()=> {
        let t= count %1000;
        return t;
    }

    useEffect(()=>{
        if(active){
            timer.current= setInterval(()=> {
                setCount(prev=> prev+1)
            },1000)
        }
        else clearInterval(timer.current)
        return ()=> clearInterval(timer.current)
    })

    return (
        <div>
            <h2>{format(count)}</h2>
            <button onClick={()=> setActive(true)}>Start</button>
            <button onClick={()=> setActive(false)} disabled={count===0}>Stop</button>
            <button onClick={()=> {setActive(false); setCount(0);}} disabled={count===0}>Reset</button>
        </div>
    )
}

export default SWatchMini