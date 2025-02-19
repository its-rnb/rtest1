import { useEffect, useState } from "react"

const CmpntTest= ()=> {

    const[count, setCount]= useState(0)

    useEffect(()=> {
        const intv= setInterval(()=> {
            setCount(prev=> (prev>=10 ? 0 : prev+1))
            console.log(count)
        },1000)
        return ()=> clearInterval(intv)
    })

    const format= ()=> {
        return count%1000
    }

    return(
        <div className="flex xs:col-span-12">
            <h1>Counter App</h1>
            <h3>{format(count)}</h3>
            <button className="xs:col-span-12 lg:col-span-2" onClick={()=> setCount(count+1)}>Increment</button>
            <button className="xs:col-span-12 lg:col-span-2" onClick={()=> setCount(count-1)} disabled={count===0}>Decrement</button>
        </div>
    )
}
export default CmpntTest