import axios from "axios";
import { useState, useEffect } from "react";

function AxTest(){

    const[data, setData]= useState([])

    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=2')
        .then(res=> setData(res.data.data))
        .then(er=> console.log('Error: '+ er))
    })

    return(
        <div className="main-atest">
            <h2>Axios test</h2>
            <ol>
                {data.map((d,index)=> <li key={index}>{d.email}</li>)}
            </ol>
        </div>
    )
}

export default AxTest