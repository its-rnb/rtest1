import { useEffect, useState, useRef } from "react"

function SWatch(){

    //manage and set time
    const[time, setTime]= useState(0)

    //check if timer is active
    const[active, setActive]= useState(false)

    //store val of prev timer count
    const timer= useRef()

    //set time format
    const format= ()=> {

        let hr= Math.floor(time /1000 /60 /60 %24)
        let mn= Math.floor(time /1000 /60 %60)
        let sc= Math.floor(time /1000 %60)
        let ms= time %1000

        hr= hr<10 ? '0'+hr : hr
        mn= mn<10 ? '0'+mn : mn
        sc= sc<10 ? '0'+sc : sc
        ms= ms<100? '0'+ms : ms

        return(`${hr} : ${mn} : ${sc} : ${ms}`)
    }

    //Assignments to 'setTime' vrb from inside 'useEffect' will be lost after each render.
    //To preserve value over time, store in 'useRef' and keep mutable value in '.current' property.
    //Otherwise, you can move this variable directly inside useEffect.
    
    useEffect(()=> {
        if(active){
            timer.current= setInterval(()=>{
                setTime(prev=> prev+10)
            },10)
        }
        else clearInterval(timer.current)
        return ()=> clearInterval(timer.current)
    })

//too many re-renders Error (infinite loop/ re-render)
//added ()=> at onClick and at useEffect return

    return(
        <div className="main-swatch">
            <h2>Stopwatch</h2>
            <p className="timer">{format(time)}</p>
            <div className="btn-group">
                <button className="sw-start" onClick={()=> setActive(true)}>Start</button>
                <button className="sw-stop" onClick={()=> setActive(false)}>Stop</button>
                <button className="sw-reset" onClick={()=> {setActive(false); setTime(0)}}>Reset</button>
                <button className="sw-condnl-render" onClick={()=> active ? setActive(false) : setActive(true)}>
                    {active ? 'Stop' : 'Resume'}
                </button>
            </div>
        </div>
    )
}

export default SWatch