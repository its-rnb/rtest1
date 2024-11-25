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

        let hr= Math.floor(time /60 /60 /1000 %24)
        let mn= Math.floor(time /60 /1000 %60)
        let sc= Math.floor(time /1000 %60)
        let ms= time %1000

        hr= hr<10 ? '0'+hr :hr
        mn= mn<10 ? '0'+mn :mn
        sc= sc<10 ? '0'+sc :sc
        ms= ms<100? '0'+ms :ms

        return(`${hr} : ${mn} : ${sc} : ${ms}`)
    }

    //Assignments to 'setTime' vrb from inside 'useEffect' will be lost after each render.
    //To preserve value over time, store in 'useRef' and keep mutable value in '.current' property.
    //Otherwise, you can move this variable directly inside useEffect.
    
    useEffect(()=>{

        if(active){

            timer.current= (setInterval(()=>{
                setTime(prev=> prev+10)
            },10))
        }
        else clearInterval(timer.current)
        return ()=> clearInterval(timer.current)
    }, [active])

//too many re-renders Error (infinite loop/ re-render)
//added ()=> at onClick and at useEffect return

    return(
        <div className="main-swatch">
            <h2>Stopwatch</h2>
            {/* Format class with time argument */}
            <p className="sw-timer">{format(time)}</p>
            <div className="btn-group">
                <button id="sw-start" onClick={()=> setActive(true)}>Start</button>
                <button id="sw-stop" onClick={()=> setActive(false)}>Stop</button>
                <button id='sw-condrend' onClick={()=> {active ? setActive(false) : setActive(true)}}>{active ? 'Stop' : 'Resume'}</button>
                <button id="sw-reset" onClick={()=> {setActive(false); setTime(0)}}>Reset</button>
            </div>
        </div>
    )
}

export default SWatch